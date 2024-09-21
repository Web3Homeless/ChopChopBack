import { Injectable } from '@nestjs/common';
import { CreateAccountsInGroupDto } from './dto/create-accounts_in_group.dto';
import { UpdateAccountsInGroupDto } from './dto/update-accounts_in_group.dto';

@Injectable()
export class AccountsInGroupsService {
  create(createAccountsInGroupDto: CreateAccountsInGroupDto) {
    return 'This action adds a new accountsInGroup';
  }

  findAll() {
    return `This action returns all accountsInGroups`;
  }

  findOne(id: number) {
    return `This action returns a #${id} accountsInGroup`;
  }

  update(id: number, updateAccountsInGroupDto: UpdateAccountsInGroupDto) {
    return `This action updates a #${id} accountsInGroup`;
  }

  remove(id: number) {
    return `This action removes a #${id} accountsInGroup`;
  }
}
