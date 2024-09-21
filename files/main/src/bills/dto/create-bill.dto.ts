export class CreateBillDto {
    payed_by_account_id: bigint;
    requested_from_account_id: bigint;
    amount: bigint;
    created_at: Date;
    payment_ids: Date[];
}
