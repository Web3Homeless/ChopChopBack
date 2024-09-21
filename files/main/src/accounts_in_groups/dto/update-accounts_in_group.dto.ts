import { PartialType } from '@nestjs/mapped-types';
import { CreateAccountsInGroupDto } from './create-accounts_in_group.dto';

export class UpdateAccountsInGroupDto extends PartialType(CreateAccountsInGroupDto) {
    group_id: bigint;
    accounts_ids: bigint[];
    created_at: Date;
}
