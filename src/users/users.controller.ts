import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity.js';
var bcrypt = require('bcryptjs');

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(
    @Body('username') username: string,
    @Body('email') email: string,
    @Body('password') password: string,
    @Body('role') role: string,
    ) {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password,salt);
    const result = await this.usersService.createUser(username,email,hash,role);
    return {data:result};

  }

  @Get()
  async findAll() {
    const result = await this.usersService.findAll();
     return {data:result};
  }

  @Get(':id')
  async  findOne(@Param('id') id: string) {
    const result = await this.usersService.findOne(+id);
     return {data:result};
  }

  @Patch(':id')
  async update(@Param('id') id: number,@Body('username') username: string, @Body('email') email: string, @Body('password') password: string,@Body('role') role: string,) {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password,salt);
    const result = await this.usersService.update(id,username,email,hash,role);
    return {data:result};
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
