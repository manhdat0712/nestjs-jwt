import { AuthDto } from './dto';
import { AuthService } from './auth.service';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('local/signin')
  signinLocal(@Body() dto: AuthDto) {
    return this.authService.signinLocal(dto);
  }
}
