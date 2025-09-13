import { JwtService } from '@nestjs/jwt';
import { Model } from 'mongoose';
import { User } from '@/src/users/entities/user.entity';
import { SignupDto } from "@/src/auth/dto/signup.dto";
import { LoginDto } from './dto/login.dto';
import { ConfigService } from '@nestjs/config';
export declare class AuthService {
    private userModel;
    private jwtService;
    private configService;
    constructor(userModel: Model<User>, jwtService: JwtService, configService: ConfigService);
    signup(signupDto: SignupDto): Promise<string>;
    login(loginDto: LoginDto): Promise<{
        token: string;
    }>;
}
