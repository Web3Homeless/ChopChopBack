import { PartialType } from '@nestjs/mapped-types';
import { CreatePaymentDto } from './create-payment.dto';

export class UpdatePaymentDto extends PartialType(CreatePaymentDto) {
    payed_by_account_id: bigint;
    requested_from_account_id: bigint;
    is_settled: boolean;
    settled_tx_hash: string;
    amount: bigint;
    created_at: Date;
}
