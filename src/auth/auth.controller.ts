import { Controller, Body, Post, Request, UseGuards, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller()
export class AuthController {
	constructor(private authService:AuthService){}

	@UseGuards(LocalAuthGuard)
	@Post('signin')
	async signIn(@Request() req){
		return this.authService.signIn(req.user)
	}

	@UseGuards(JwtAuthGuard)
    @Get('profile')
     getProfile(@Request() req){
    return req.user;
   }
}
