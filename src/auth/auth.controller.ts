import { Controller, Body, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';

@Controller('auth')
export class AuthController {
	constructor(private authService:AuthService){}

	@UseGuards(LocalAuthGuard)
	@Post('signin')
	async signIn(@Request() req){
		return this.authService.signIn(req.user)
	}
}
