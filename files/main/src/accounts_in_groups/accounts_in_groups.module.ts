import { Module } from '@nestjs/common';
import { AccountsInGroupsService } from './accounts_in_groups.service';
import { AccountsInGroupsController } from './accounts_in_groups.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountsInGroup } from './entities/accounts_in_group.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AccountsInGroup])],
  controllers: [AccountsInGroupsController],
  providers: [AccountsInGroupsService],
})
export class AccountsInGroupsModule {}
