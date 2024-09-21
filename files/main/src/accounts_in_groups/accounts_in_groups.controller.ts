import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AccountsInGroupsService } from './accounts_in_groups.service';
import { CreateAccountsInGroupDto } from './dto/create-accounts_in_group.dto';
import { UpdateAccountsInGroupDto } from './dto/update-accounts_in_group.dto';

@Controller('accounts-in-groups')
export class AccountsInGroupsController {
  constructor(private readonly accountsInGroupsService: AccountsInGroupsService) {}

  @Post()
  create(@Body() createAccountsInGroupDto: CreateAccountsInGroupDto) {
    return this.accountsInGroupsService.create(createAccountsInGroupDto);
  }

  @Get()
  findAll() {
    return this.accountsInGroupsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.accountsInGroupsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAccountsInGroupDto: UpdateAccountsInGroupDto) {
    return this.accountsInGroupsService.update(+id, updateAccountsInGroupDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.accountsInGroupsService.remove(+id);
  }
}
