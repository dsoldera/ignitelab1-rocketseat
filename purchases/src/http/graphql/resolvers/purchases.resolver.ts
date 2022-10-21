// import { UseGuards } from '@nestjs/common';
// import {
//   Args,
//   Mutation,
//   Parent,
//   Query,
//   ResolveField,
//   Resolver,
// } from '@nestjs/graphql';
// import { CustomersService } from '../../../services/customers.service';
// import { ProductsService } from '../../../services/products.service';

// import { PurchasesService } from '../../../services/purchases.service';
// import { AuthorizationGuard } from '../../auth/authorization.guard';
// import { AuthUser, CurrentUser } from '../../auth/current-user';
// import { CreatePurchaseInput } from '../inputs/create-purchase-input';
// import { Purchase } from '../models/purchase';

// @Resolver(() => Purchase)
// export class PurchasesResolver {
//   constructor(
//     private purchasesService: PurchasesService,
//     private productsService: ProductsService,
//     private customersService: CustomersService,
//   ) {}

//   @Query(() => [Purchase])
//   @UseGuards(AuthorizationGuard)
//   purchases() {
//     return this.purchasesService.listAllPurchases();
//   }

//   @ResolveField()
//   product(@Parent() purchase: Purchase) {
//     return this.productsService.getProductById(purchase.productId);
//   }

//   @Mutation(() => Purchase)
//   @UseGuards(AuthorizationGuard)
//   async createPurchase(
//     @Args('data') data: CreatePurchaseInput,
//     @CurrentUser() user: AuthUser,
//   ) {
//     const customer = await this.customersService.getCustomerByAuthUserId(
//       user.sub,
//     );
//     console.log('user', customer);

//     if (!customer) {
//       await this.customersService.createCustomer({
//         authUserId: user.sub,
//       });
//       //throw new Error('Customer not found');
//     }
//     return this.purchasesService.createPurchase({
//       customerId: customer.id,
//       productId: data.productId,
//     });
//   }
// }
