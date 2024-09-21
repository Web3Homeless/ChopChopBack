import { Test, TestingModule } from '@nestjs/testing';
import { AccountsInGroupsController } from './accounts_in_groups.controller';
import { AccountsInGroupsService } from './accounts_in_groups.service';

describe('AccountsInGroupsController', () => {
  let controller: AccountsInGroupsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AccountsInGroupsController],
      providers: [AccountsInGroupsService],
    }).compile();

    controller = module.get<AccountsInGroupsController>(AccountsInGroupsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
