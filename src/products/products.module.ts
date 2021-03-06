import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Products } from './entities/product.entity';
import { CaslModule } from '../casl/casl.module';


@Module({
  imports:[TypeOrmModule.forFeature([Products]),CaslModule],
  controllers: [ProductsController],
  providers: [ProductsService]
})
export class ProductsModule {}
