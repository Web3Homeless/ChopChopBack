import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PaymentsModule } from './payments/payments.module';
import { GroupsModule } from './groups/groups.module';
import { ChainsModule } from './chains/chains.module';
import { DatabaseModule } from './database/database.module';
import { AccountsModule } from './accounts/accounts.module';
import { AccountsInGroupsModule } from './accounts_in_groups/accounts_in_groups.module';
import { InchFusionModule } from './inch_fusion/payments.module';
import { BillsModule } from './bills/bills.module';

@Module({
  imports: [PaymentsModule, GroupsModule, ChainsModule, DatabaseModule, AccountsModule, AccountsInGroupsModule, InchFusionModule, BillsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
