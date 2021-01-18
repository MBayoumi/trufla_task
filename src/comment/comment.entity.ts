import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { IsNotEmpty, IsString } from 'class-validator';
import { Article } from '../article/article.entity';
import { ApiProperty } from '@nestjs/swagger';
import { CrudValidationGroups } from '@nestjsx/crud';

const { CREATE, UPDATE } = CrudValidationGroups;

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ required: true })
  @Column()
  @IsString({ groups: [CREATE, UPDATE] })
  @IsNotEmpty({ groups: [CREATE, UPDATE] })
  body: string;

  @IsNotEmpty({ groups: [CREATE, UPDATE] })
  @ManyToOne((type) => Article, (article) => article.comments)
  @ApiProperty({ required: true, type: () => Article })
  article: Article;

}
