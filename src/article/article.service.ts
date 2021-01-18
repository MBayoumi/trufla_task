import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Article } from './article.entity';

@Injectable()
export class ArticleService extends TypeOrmCrudService<Article> {
  constructor(@InjectRepository(Article) public articlesRepository: Repository<Article>) {
    super(articlesRepository);
  }

  /*********************************************************************
   *
   * nestjsx crud used for more productivity as task started @ 17/1/2020 10pm
   *
   * all docs could be found in README.md file
   *
   * *******************************************************************/

  async addThumbUp(articleId: number): Promise<Article> {
    try {
      const article = await this.articlesRepository.findOne(articleId);
      article.thumbsUp += 1;
      return this.articlesRepository.save(article, { reload: true }).then(article => {
          return this.articlesRepository.findOne(article.id, { relations: ['author', 'comments'] });
        },
      );
    } catch (e) {
      Logger.error(e.message);
      throw new HttpException('[Internal Server Error] Couldn\'t ThumpUp article', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
