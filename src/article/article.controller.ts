import { Body, Controller, Post, Req } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { Article } from './article.entity';
import { ArticleService } from './article.service';
import { ParseIntOptionalPipe } from '../customPipes/ParseIntOptional.pipe';
import { ApiBody, ApiResponse } from '@nestjs/swagger';

@Crud({
  model: {
    type: Article,
  },
  query: {
    join: {
      author: {
        eager: true,
        allow: [],
      },
      comments: {
        eager: true,
        allow: [],
      },
    },
    sort: [{
      field: 'thumbsUp',
      order: 'DESC',
    }],
  },
})
@Controller('article')
export class ArticleController {
  constructor(public service: ArticleService) {
  }

  @ApiBody({
    schema: {
      example: '{"articleId": 5}',
      properties: {
        articleId: { type: 'number' },
      },
    },
  })
  @ApiResponse(
    {
      type: Article,
    },
  )
  @Post('thumbsup')
  async addThumbUp(@Req() req, @Body('articleId', new ParseIntOptionalPipe()) articleId: number) {
    try {
      return this.service.addThumbUp(articleId);
    } catch (e) {
      return e.message;
    }
  }

}
