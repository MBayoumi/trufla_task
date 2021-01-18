import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import 'dotenv/config';

export class AppTestingModule {

  async createAppModule(customModules: {
    entities?: any[];
    imports?: any[];
    providers?: any[];
    exports?: any[];
    controllers?: any[];
  }): Promise<TestingModule> {
    let {
      entities = [],
      imports = [],
      providers = [],
      exports = [],
      controllers = [],
    } = customModules;
    const mainImports = [
      TypeOrmModule.forRoot({ keepConnectionAlive: true }),
      TypeOrmModule.forFeature(entities),
    ];

    return await Test.createTestingModule({
      imports: mainImports.concat(imports),
      providers,
      exports,
      controllers,
    }).compile();
  }
}
