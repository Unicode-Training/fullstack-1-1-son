import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class SocketGuard implements CanActivate {
   constructor(private readonly authService: AuthService) {}
  async canActivate(
    context: ExecutionContext,
  ):  Promise<boolean>{
    const client = context.switchToWs().getClient();
    const {accessToken} = client.handshake.auth;
    const {user} = await this.authService.profile(accessToken as string) as any;
    if (!user) {
      return false
    }
    return true;
  }
}
