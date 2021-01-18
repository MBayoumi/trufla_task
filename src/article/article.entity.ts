import { Column, Entity, Index, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Author } from '../user/user.entity';
import { Comment } from '../comment/comment.entity';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { CrudValidationGroups } from '@nestjsx/crud';

const { CREATE, UPDATE } = CrudValidationGroups;

@Entity()
export class Article {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  @IsString({ groups: [CREATE, UPDATE] })
  @IsNotEmpty({ groups: [CREATE, UPDATE] })
  @ApiProperty({ required: true })
  title: string;

  @Index()
  @Column({ nullable: false })
  @IsString({ groups: [CREATE, UPDATE] })
  @IsNotEmpty({ groups: [CREATE, UPDATE] })
  @ApiProperty({ required: true })
  body: string;

  @Column()
  @ApiProperty({ readOnly: true })
  thumbsUp: number;

  @OneToMany((type) => Comment, (comment) => comment.article)
  @ApiPropertyOptional({ readOnly: true, isArray: true, type: () => Comment })
  comments?: Comment[];

  @ManyToOne((type) => Author, (author) => author.articles)
  @ApiProperty({ required: true })
  @IsNotEmpty({ groups: [CREATE, UPDATE] })
  @IsNumber()
  author: Author;

}
