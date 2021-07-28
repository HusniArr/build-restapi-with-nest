import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository} from 'typeorm';
import { Products } from './entities/product.entity';


@Injectable()
export class ProductsService {

  constructor(
    @InjectRepository(Products)
    private productRepository:Repository<Products>,
    ){}
  create(kd_prd:string,nm_prd:string,hrg_prd:number,stok_prd:number,tgl_expired:string) {
    const product = new Products();
    product.kd_prd = kd_prd;
    product.nm_prd = nm_prd;
    product.hrg_prd = hrg_prd;
    product.stok_prd = stok_prd;
    product.tgl_expired = tgl_expired;
    return this.productRepository.save(product);
  }

  findAll() {
    return this.productRepository.find();
  }

  findOne(id:number) {
    return this.productRepository.findOne(id);
  }

  async update(id: number, kd_prd:string,nm_prd:string,hrg_prd:number,stok_prd:number,tgl_expired:string) {
    const product = await this.productRepository.findOne(id);
    product.kd_prd = kd_prd;
    product.nm_prd = nm_prd;
    product.hrg_prd = hrg_prd;
    product.stok_prd = stok_prd;
    product.tgl_expired = tgl_expired;
    return this.productRepository.save(product);
  }

  async remove(id:number) {
    const product = await this.productRepository.findOne(id);
    return this.productRepository.remove(product);
  }
}
