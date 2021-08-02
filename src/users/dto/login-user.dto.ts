import { IsString, Max, Min } from 'class-validator';

export class LoginUserDto {

	@IsString()
	@Min(3)
	@Max(50)
	username:string;

	@IsString()
	@Min(8,{message:"password terlalu pendek min 8 karakter."})
	@Max(20,{message:"passord terlalu panjang maks 20 karakter."})
	password:string;
}