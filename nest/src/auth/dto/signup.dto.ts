import { IsEmail, IsNotEmpty, IsString, MinLength, IsArray, IsEnum } from 'class-validator';
import { Role } from '@/src/users/entities/user.entity'
export class SignupDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(8)
    password: string;

    @IsArray()
    @IsEnum(Role, { each: true })
    roles: string[];
}