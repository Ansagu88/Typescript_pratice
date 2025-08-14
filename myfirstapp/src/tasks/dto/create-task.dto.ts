import { IsString, IsOptional, MinLength } from 'class-validator'; 


export class CreateTaskDto {
    @IsString()
    @MinLength(2)
    title: string;

    @IsOptional()
    @IsString()
    @MinLength(2)
    status?: string;
    
}