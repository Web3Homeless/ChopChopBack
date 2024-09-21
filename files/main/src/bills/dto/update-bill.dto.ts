import { PartialType } from '@nestjs/mapped-types';
import { CreateBillDto } from './create-bill.dto';

export class UpdateBillDto extends PartialType(CreateBillDto) {
    payed_by_account_id: bigint;
    requested_from_account_id: bigint;
    amount: bigint;
    created_at: Date;
    payment_ids: Date[];
}
