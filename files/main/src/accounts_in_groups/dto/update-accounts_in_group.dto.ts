import { PartialType } from '@nestjs/mapped-types';
import { CreateAccountsInGroupDto } from './create-accounts_in_group.dto';

export class UpdateAccountsInGroupDto extends PartialType(CreateAccountsInGroupDto) {}
