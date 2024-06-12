import { Module } from '@nestjs/common';
import { CrewController } from './crew.controller';

@Module({
  controllers: [CrewController]
})
export class CrewModule {}
