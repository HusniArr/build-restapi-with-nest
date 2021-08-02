import { Injectable, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { User } from '../users/entities/user.entity.js';
// import { LoginUserDto } '../dto/login-user.dto';
import * as bcrypt from 'bcryptjs';


@Injectable()
export class AuthService {
	constructor(@InjectRepository(User) private usersRepository : Repository<User> , private jwtService : JwtService ){}

	async validateUser(username: string, pass: string): Promise<User> {
    const user = await this.usersRepository.findOne({username:username});
    if(!user){
    	return null;
    }
    const valid = await bcrypt.compareSync(pass,user.password);
    if (valid) {
      return user;
    }
    return null;
  }

  async signIn(user : User) {

   	const payload = {username:user.username,sub:user.id}
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
	
}
