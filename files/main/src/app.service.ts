import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
@Injectable()
export class AppService {
  constructor(private readonly dataSource: DataSource) {}ç
  //get
  getHello(): string {
    return this.dataSource.isInitialized
    ? 'Database connection is established'
    : 'Database connection is not established';
    
  }

}
