import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TestResolver } from './test.resolver';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import path from 'node:path';
import { DatabaseModule } from '../database/database.module';

import { CoursesResolver } from './graphql/resolvers/courses.resolver';
import { EnrollmentsResolver } from './graphql/resolvers/enrollments.resolver';
import { StudentResolver } from './graphql/resolvers/students.resolver';

import { StudentsService } from 'src/services/students.service';
import { EnrollmentsService } from '../services/enrollments.service';
import { CoursesService } from 'src/services/courses.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: path.resolve(process.cwd(), '.src/schema.gql'),
    }),
  ],
  providers: [
    // Resolvers
    TestResolver,
    CoursesResolver,
    EnrollmentsResolver,
    StudentResolver,

    // Services
    StudentsService,
    EnrollmentsService,
    CoursesService,
  ],
})
export class HttpModule {}
