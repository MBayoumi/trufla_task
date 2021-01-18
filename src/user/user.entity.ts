import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Article } from '../article/article.entity';
import { CrudValidationGroups } from '@nestjsx/crud';

const { CREATE, UPDATE } = CrudValidationGroups;

@Entity()
export class Author {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ required: true })
  @IsString({ groups: [CREATE, UPDATE] })
  @IsNotEmpty({ groups: [CREATE, UPDATE] })
  @Column()
  name: string;

  @ApiProperty({ required: true })
  @IsString({ groups: [CREATE, UPDATE] })
  @IsNotEmpty({ groups: [CREATE, UPDATE] })
  @Column()
  job_title: string;

  @OneToMany((type) => Article, (article) => article.author)
  @ApiProperty({ readOnly: true, type: () => Article, isArray: true })
  articles?: Article[];
}
