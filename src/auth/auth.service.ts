import {
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import * as users from '../users.json';
import { AuthDto } from './dto';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) { }
  signinLocal(dto: AuthDto) {
    //retrieve user
    const user = users.find((_user) => _user.email === dto.email);
    // console.log(dto.password);
    if (!user) {
      throw new UnauthorizedException('Credential incorrect');
    }
    if (user.password !== dto.password) {
      throw new UnauthorizedException('Credential incorrect');
    }
    return this.signUser(user.id, user.email, 'user');
  }

  signUser(userId: number, email: string, type: string) {
    return this.jwtService.sign({
      sub: userId,
      email,
      type: type,
    });
  }
}
