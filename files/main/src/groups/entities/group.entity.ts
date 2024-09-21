import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
export class Group {
  @PrimaryGeneratedColumn() // Auto-incremented primary key
  id: number;

  @Column() // Specifies a regular column
  name: string;
}
