import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { Comment } from './comment.entity';
import { CommentService } from './comment.service';

@Crud({
  model: {
    type: Comment,
  },
  query: {
    join: {
      article: {
        eager: true,
        allow: [],
      },
    },
  },
})
@Controller('comment')
export class CommentController {
  constructor(public service: CommentService) {
  }
}
