import { Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn } from 'typeorm';
import { IsNotEmpty } from 'class-validator';

@Entity({ name: 'tb_usuarios' })
export class Postagem {
  @PrimaryGeneratedColumn()
  id: number

  @IsNotEmpty()
  @Column({ length: 100, nullable: false })
  titulo: string

  @IsNotEmpty()
  @Column({ length: 1000, nullable: false })
  texto: string

  @UpdateDateColumn()
  date: Date

  
}
