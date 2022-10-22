import { UseGuards } from '@nestjs/common';
import { AuthorizationGuard } from './auth/authorization.guard';
import { PrismaService } from '../database/prisma/prisma.service';
import { Resolver, Query, Int } from '@nestjs/graphql';

@Resolver()
export class TestResolver {
  constructor(private prisma: PrismaService) {}

  @Query(() => Int)
  @UseGuards(AuthorizationGuard)
  hello() {
    return '100';
  }
}
