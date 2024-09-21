import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export class Account {  
    @PrimaryGeneratedColumn() // Auto-incremented primary key
    id: number;
  
    @Column() // Specifies a regular column
    name: string;

    @Column() // Specifies a regular column
    address: string;

    @Column() // Specifies a regular column
    chain_ids: number[];

    @Column() // Specifies a regular column
    token_ids: number[];
  }
