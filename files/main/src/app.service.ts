import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  //get
  getHello(): string {
    return 'Hello World!';
  }

}
