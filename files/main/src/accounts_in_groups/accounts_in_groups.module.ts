import { Module } from '@nestjs/common';
import { AccountsInGroupsService } from './accounts_in_groups.service';
import { AccountsInGroupsController } from './accounts_in_groups.controller';

@Module({
  controllers: [AccountsInGroupsController],
  providers: [AccountsInGroupsService],
})
export class AccountsInGroupsModule {}
