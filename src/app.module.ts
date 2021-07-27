import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { UsersController } from './users/users.controller';


@Module({
  imports: [TypeOrmModule.forRoot({
  "type": "postgres",
  "host": "localhost",
  "port": 5432,
  "username": "postgres",
  "password": "c4hbumiayu",
  "database": "sales",
  "entities": ["dist/**/*.entity{.ts,.js}"],
  "synchronize": true
  }),UsersModule, ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule{
  configure(consumer : MiddlewareConsumer){
    consumer
    .apply(LoggerMiddleware)
    .forRoutes(UsersController)
  }
}
