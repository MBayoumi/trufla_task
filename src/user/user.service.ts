import { Injectable } from '@nestjs/common';
import { Author } from './user.entity';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService extends TypeOrmCrudService<Author> {

  constructor(@InjectRepository(Author) public authorsRepository: Repository<Author>) {
    super(authorsRepository);

    /*********************************************************************
     *
     * nestjsx crud used for more productivity as task started @ 17/1/2020 10pm
     *
     * all docs could be found in README.md file
     *
     * *******************************************************************/

  }

}
