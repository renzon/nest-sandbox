import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';
import { LoggerMiddleware } from './middleware/item.middleware';

@Module({
  imports: [],
  controllers: [ItemsController],
  providers: [ItemsService],
})
export class ItemsModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(LoggerMiddleware).forRoutes('items');
  }
}
