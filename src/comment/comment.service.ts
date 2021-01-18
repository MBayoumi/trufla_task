import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comment } from './comment.entity';

@Injectable()
export class CommentService extends TypeOrmCrudService<Comment> {
  constructor(@InjectRepository(Comment) public commentsRepository: Repository<Comment>) {
    super(commentsRepository);

    /*********************************************************************
     *
     * nestjsx crud used for more productivity as task started @ 17/1/2020 10pm
     *
     * all docs could be found in README.md file
     *
     * *******************************************************************/

  }
}
