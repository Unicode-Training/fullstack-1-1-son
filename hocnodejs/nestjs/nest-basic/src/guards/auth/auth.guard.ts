import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { AuthService } from "src/auth/auth.service";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly authService: AuthService) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    //return true --> cho phép đi tiếp
    //return false hoặc throw exception --> chặn

    const request = context.switchToHttp().getRequest();

    const token = request.headers["authorization"]?.split(" ")[1];
    const user = await this.authService.profile(token as string);
    if (!user) {
      throw new UnauthorizedException("Token invalid");
    }
    request.user = user;
    return true;
  }
}
