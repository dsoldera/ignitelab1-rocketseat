import { UseGuards } from '@nestjs/common';
import { AuthorizationGuard } from './auth/authorization.guard';
import { PrismaService } from '../database/prisma/prisma.service';
import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class TestResolver {
  constructor(private prisma: PrismaService) {}

  @Query(() => String)
  @UseGuards(AuthorizationGuard)
  hello() {
    return 'hello world';
  }
}
