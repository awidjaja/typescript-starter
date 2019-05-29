import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '<a href="http://127.0.0.1:8080">Hello World!</a>';
  }
}
