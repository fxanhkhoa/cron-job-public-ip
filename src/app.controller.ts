import { Controller, Get, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('ip')
  getIp(): string {
    return this.appService.getIp();
  }

  @Get('client-ip')
  getClientIp(@Req() request: Request): { ip: string; headers: any } {
    const ip = this.appService.getClientPublicIp(request.headers, request.ip);
    return {
      ip,
      headers: {
        'x-real-ip': request.headers['x-real-ip'],
        'x-forwarded-for': request.headers['x-forwarded-for'],
        'cf-connecting-ip': request.headers['cf-connecting-ip'],
        'x-client-ip': request.headers['x-client-ip'],
        'request-ip': request.ip,
      },
    };
  }
}
