import { UseGuards } from '@nestjs/common';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Product } from '../models/product';
import { ProductsService } from '../../../services/products.service';
import { CreateProductInput } from '../inputs/create-product-input';
import { AuthorizationGuard } from '../../auth/authorization.guard';

@Resolver(() => Product)
export class ProductsResolver {
  constructor(private productService: ProductsService) {}

  @Query(() => [Product]) // Query retorna um informacao
  products() {
    return this.productService.listAllProducts();
  }

  @UseGuards(AuthorizationGuard) // at the frontend we will need to get the product list, so for now no auth necessary
  @Mutation(() => Product)
  createProduct(@Args('data') data: CreateProductInput) {
    return this.productService.createProduct(data);
  }
}
