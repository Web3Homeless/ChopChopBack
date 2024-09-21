import { Module } from '@nestjs/common';
import { InchFusionController } from './inch_fusion.controller';

@Module({
  controllers: [InchFusionController],
  providers: [],
})
export class InchFusionModule {}
