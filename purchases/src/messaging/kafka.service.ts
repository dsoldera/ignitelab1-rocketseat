import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';

@Injectable()
export class KafkaService {
  constructor() {}

  async onModuleInit() {}

  async onModuleDestroy() {}
}
