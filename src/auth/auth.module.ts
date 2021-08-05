import { Module } from '@nestjs/common';
import{ TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { User } from '../users/entities/user.entity';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { LocalStrategy } from './local.strategy';
import { jwtConstants } from './constants';
import { JwtStrategy } from './jwt.strategy';


@Module({
	imports:[TypeOrmModule.forFeature([User]),PassportModule,JwtModule.register({
		secret:jwtConstants.secret,
		signOptions:{expiresIn:"60s"}
	})],
	controllers:[AuthController],
	providers:[AuthService,LocalStrategy,JwtStrategy],
	exports:[AuthService],
})
export class AuthModule {}
