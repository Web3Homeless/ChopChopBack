import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export class Payment {
    @PrimaryGeneratedColumn() // Auto-incremented primary key
    id: bigint;
  
    @Column() // Specifies a regular column
    payed_by_account_id: bigint;

    @Column() // Specifies a regular column
    requested_from_account_id: bigint;

    @Column() // Specifies a regular column
    is_settled: boolean;

    @Column() // Specifies a regular column
    settled_tx_hash: string;

    @Column() // Specifies a regular column
    amount: bigint;

    @Column() // Specifies a regular column
    created_at: Date;


}