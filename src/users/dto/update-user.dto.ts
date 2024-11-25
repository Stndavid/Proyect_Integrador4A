import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class UpdateUserDto{
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    name?: String;

    @IsString()
    @IsNotEmpty()
    @IsOptional()
    lastname?: String;

    @IsString()
    @IsNotEmpty()
    @IsOptional()
    phone?: String;
    
    image?: String;
    notification_token?: String;

}