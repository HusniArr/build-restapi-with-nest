import { IsEmail, IsNotEmpty, Min, Max } from 'class-validator';

export class CreateUserDto {
 @IsNotEmpty()
  username: string;

 @IsEmail()
  email: string;

  @IsNotEmpty()
  @Max(10)
  password: string;

   @IsNotEmpty()
  role: string;
}
