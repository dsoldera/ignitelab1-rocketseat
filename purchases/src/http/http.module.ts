import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import path from 'node:path';

import { DatabaseModule } from '../database/database.module';

// import { ProductsResolver } from './graphql/resolvers/products.resolver';
// import { CustomersResolver } from './graphql/resolvers/customers.resolver';
// import { PurchasesResolver } from './graphql/resolvers/purchases.resolver';

// import { ProductsService } from '../services/products.service';
// import { CustomersService } from '../services/customers.service';
// import { PurchasesService } from '../services/purchases.service';
import { TestResolver } from './test.resolver';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: path.resolve(process.cwd(), 'src/squema.gql'),
    }),
  ],
  controllers: [],
  providers: [
    //Services
    // CustomersService,
    // PurchasesService,
    // ProductsService,
    // Resolvers
    // CustomersResolver,
    // PurchasesResolver,
    // ProductsResolver,
    TestResolver,
  ],
})
export class HttpModule {}
