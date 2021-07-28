import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ValidationPipe} from '../pipes/validation.pipe';
import { Products } from './entities/product.entity';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  async create(@Body('kd_prd') kd_prd:string, @Body('nm_prd') nm_prd:string, @Body('hrg_prd') hrg_prd:number, @Body('stok_prd') stok_prd:number,@Body('tgl_expired') tgl_expired:string) {
    const result = await this.productsService.create(kd_prd,nm_prd,hrg_prd,stok_prd,tgl_expired);
    return {message:"berhasil ditambahkan",data:result};
  }

  @Get()
  async findAll() {
    const result = await this.productsService.findAll();
    return {data:result};
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    const result =  await this.productsService.findOne(+id);
    return {data:result};
  }

  @Patch(':id')
  async update(@Param('id') id: number,@Body('kd_prd') kd_prd:string, @Body('nm_prd') nm_prd:string, @Body('hrg_prd') hrg_prd:number, @Body('stok_prd') stok_prd:number, @Body('tgl_expired') tgl_expired:string,) {
    const result =  await this.productsService.update(id,kd_prd,nm_prd,hrg_prd,stok_prd,tgl_expired);
    return {message:"berhasil diedit.",data:result};
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    await this.productsService.remove(id);
    return {message:"berhasil dihapus.",data:null};
  }
}
