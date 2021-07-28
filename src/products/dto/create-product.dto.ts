import { IsString, IsInt, IsNotEmpty,MaxLength , IsDate} from 'class-validator';

export class CreateProductDto {
	@IsString()
	@MaxLength(20,{message:"maksimal 20 karakter"})
	kd_prd:string;
	@IsString()
	nm_prd:string;
	@IsInt()
	hrg_prd:number;
	@IsInt()
	stok_prd:number;
	@IsDate()
	tgl_expired:Date;

}
