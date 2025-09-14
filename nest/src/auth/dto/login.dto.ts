import { IsNotEmpty, IsString, IsEmail, MinLength, IsArray } from 'class-validator';
export class LoginDto {
    @IsEmail()
    @IsNotEmpty()
    @IsString()
    email: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(8)
    password: string;

    @IsNotEmpty()
    @IsArray()
    roles: string[];
}