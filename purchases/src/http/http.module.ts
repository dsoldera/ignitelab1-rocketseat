import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import path from 'path';

import { DatabaseModule } from '../database/database.module';

import { ProductsResolver } from './graphql/resolvers/products.resolver';
import { CustomersResolver } from './graphql/resolvers/customers.resolver';
import { PurchasesResolver } from './graphql/resolvers/purchases.resolver';

import { ProductsService } from '../services/products.service';
import { CustomersService } from '../services/customers.service';
import { PurchasesService } from '../services/purchases.service';
import { TestController } from './test/test.controller';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: path.resolve(process.cwd(), 'src/squema.gql'),
    }),
  ],
  controllers: [TestController],
  providers: [
    //Services
    CustomersService,
    PurchasesService,
    ProductsService,

    // Resolvers
    CustomersResolver,
    PurchasesResolver,
    ProductsResolver,
  ],
})
export class HttpModule {}
