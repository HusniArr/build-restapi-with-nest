import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity.js';


@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    ){}

  createUser(username : string, email : string, password : string, isAdmin: boolean) {
    const user = new User();
    user.username = username;
    user.email = email;
    user.password = password;
    user.isadmin = isAdmin;
    return this.usersRepository.save(user);
  }

  findAll() {
    return this.usersRepository.find();
  }

  findOne(id: number) {
    return this.usersRepository.findOne(+id);
  }
 fetchByUsername(username: string) {
    return this.usersRepository.findOne(username);
  }
  async update(id:number ,username : string, email : string, password : string, isAdmin: boolean) {
    const user = await this.usersRepository.findOne(id);
    user.username =  username;
    user.email = email;
    user.password = password;
    user.isadmin = isAdmin;
    return this.usersRepository.save(user);

  }

  async remove(id: number) {
    const user = await this.usersRepository.findOne(id);
    return this.usersRepository.remove(user);
  }
}
