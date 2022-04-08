import { UseGuards } from '@nestjs/common';
import { AuthorizationGuard } from './auth/authorization.guard';
import { PrismaService } from '../database/prisma/prisma.service';
import { Resolver, Query } from '@nestjs/graphql';

@Resolver()
export class TestResolver {
  constructor(private prisma: PrismaService) {}

  // to test the conection using the /test url
  // @Get('test')
  @Query(() => String)
  // @UseGuards(AuthorizationGuard)
  hello() {
    // to test the return of the database
    //return this.prisma.customer.findMany();
    return 'Hello World';
  }
}
