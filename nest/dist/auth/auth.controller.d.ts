import { AuthService } from './auth.service';
import { SignupDto } from "@/src/auth/dto/signup.dto";
import { LoginDto } from "@/src/auth/dto/login.dto";
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signup(signupDto: SignupDto): Promise<string>;
    login(loginDto: LoginDto): Promise<{
        token: string;
    }>;
}
