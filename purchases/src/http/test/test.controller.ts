import { Controller, Get } from '@nestjs/common';
// import { PrismaService } from '../../database/prisma/prisma.service';
// import { AuthorizationGuard } from '../auth/authorization.guard';
// import { useUser } from '@auth0/nextjs-auth0';

@Controller('test')
export class TestController {
  // constructor(private prisma: PrismaService) {}

  @Get()
  // @UseGuards(AuthorizationGuard)
  hello() {
    // const { user } = useUser();
    // {
    //   JSON.stringify(user, null, 2);
    // }
    // return this.prisma.customer.findMany();
    return 'ok';
  }
}
