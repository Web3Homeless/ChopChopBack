import { Test, TestingModule } from '@nestjs/testing';
import { AccountsInGroupsService } from './accounts_in_groups.service';

describe('AccountsInGroupsService', () => {
  let service: AccountsInGroupsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AccountsInGroupsService],
    }).compile();

    service = module.get<AccountsInGroupsService>(AccountsInGroupsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
