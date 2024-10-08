import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export class AccountsInGroup {
    @PrimaryGeneratedColumn() // Auto-incremented primary key
    id: bigint;
  
    @Column() // Specifies a regular column
    group_id: bigint;

    @Column() // Specifies a regular column
    accounts_ids: bigint[];

    @Column() // Specifies a regular column
    created_at: Date;

}
