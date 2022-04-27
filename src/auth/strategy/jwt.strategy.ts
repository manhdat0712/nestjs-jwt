import {
  ExtractJwt,
  Strategy,
} from 'passport-jwt';

import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      // ignoreExpiration: true,
      secretOrKey: 'super-secret-key',
    });
  }

  async validate(payload: any) {
    console.log(payload);

    return payload;
  }
}
