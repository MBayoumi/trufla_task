import { TestingModule } from '@nestjs/testing';
import { ArticleService } from '../article.service';
import { Article } from '../article.entity';
import { getRepository, Repository } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppTestingModule } from '../../app.testing.module';

describe('ArticleService', () => {
  let module: TestingModule;
  let articleService: ArticleService;
  let articleRepo: Repository<Article>;

  beforeEach(async () => {
    jest.setTimeout(30000);
    const app = new AppTestingModule();
    module = await app.createAppModule({
      imports: [TypeOrmModule.forFeature([Article])],
      providers: [ArticleService],
    });
    articleService = await module.get<ArticleService>(ArticleService);
    articleRepo = getRepository(Article);
  });

  it('should be defined', async () => {
    const articleMock: Article = {
      'id': 10,
      'title': 'test add 1',
      'body': 'test article 1 body ',
      'thumbsUp': 1,
      'author': {
        'id': 1,
        'job_title': 'Developer',
        'name': 'Mbayoumi',
      },
    };
    const updatedArticleMock: any = {
      'id': 10,
      'title': 'test add 1',
      'body': 'test article 1 body ',
      'comments': [],
      'thumbsUp': 2,
      'author': {
        'id': 1,
        'job_title': 'Developer',
        'name': 'Mbayoumi',
      },

    };

    jest
      .spyOn(articleRepo, 'findOne')
      .mockImplementationOnce(() => Promise.resolve(articleMock));

    const temp = await articleService.addThumbUp(10);
    expect(temp).toEqual(updatedArticleMock);
  });
});
