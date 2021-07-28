import { Entity, Column, PrimaryColumn, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Products {
	@PrimaryGeneratedColumn()
	id:number;
	@Column({type:"varchar"})
	kd_prd:string;
	@Column({type:"varchar"})
	nm_prd:string;
	@Column({type:"int"})
	hrg_prd:number;
	@Column({type:"int"})
	stok_prd:number;
	@Column()
	tgl_expired:string;
}
