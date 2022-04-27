import {
  Controller,
  Get,
  UseGuards,
} from '@nestjs/common';

import { AppService } from './app.service';
import { GetCurrentUserById } from './utils/get-user-by-id.decorator';
import { JwtAuthGuard } from './utils/guard/jwt-guard.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @UseGuards(JwtAuthGuard)
  @Get()
  getHello(@GetCurrentUserById() userId: number): string {
    // console.log(userId);
    return this.appService.getHello();
  }
}
