import { PartialType } from '@nestjs/mapped-types';
import { CreateAccountDto } from './create-account.dto';

export class UpdateAccountDto extends PartialType(CreateAccountDto) {
    name: string;
    address: string;
    chain_ids: number[];
    token_ids: number[];
}
