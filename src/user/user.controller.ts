import { Controller } from '@nestjs/common';
import { UserService } from './user.service';
import { Crud } from '@nestjsx/crud';
import { Author } from './user.entity';

@Crud({
  model: {
    type: Author,
  },
  query: {
    join: {
      articles: {
        eager: true,
        allow: [],
      },
    },
  },
})
@Controller('author')
export class UserController {
  constructor(public service: UserService) {
  }
}
