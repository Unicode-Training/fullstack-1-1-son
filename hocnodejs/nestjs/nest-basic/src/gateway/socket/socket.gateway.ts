import { UseGuards } from '@nestjs/common';
import { SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import {Server} from "socket.io";
import { SocketGuard } from 'src/guards/socket/socket.guard';
import {OnGatewayConnection} from "@nestjs/websockets"
import { AuthService } from 'src/auth/auth.service';

@WebSocketGateway(4000, {
  cors: "*"
})
@UseGuards(SocketGuard)
export class SocketGateway implements OnGatewayConnection {
   constructor(private readonly authService: AuthService) {}
  @WebSocketServer() 
  server: Server | null = null;

  async handleConnection(client: any) {
    //map socketId với userId trên db
    const {accessToken} = client.handshake.auth;
    const {user} = await this.authService.profile(accessToken as string) as any;
    if (!user) {
      return false;
    }
    //Update socketId với userId
    await this.authService.syncSocketWithUser(client.id as string, user.id as number);
  }
  @SubscribeMessage('message')
  async handleMessage(client: any, payload: any) {
    const {message, userId} = payload;
    //lấy được socketId của user cần gửi tới
    const {socketId} = await this.authService.getSocketIdByUser(+userId) as {socketId: string};
    if (!socketId) {
      return false;
    }
    //Bắn event về
    this.server?.to(socketId).emit('new-message', message);
  }
}

//User1 --> token --> userId 1 --> socketId --> lưu socketId vào db tương với userId có id = 1
//User2 --> token --> userId 2 -> lưu socketId vào db tương với userId có id = 2