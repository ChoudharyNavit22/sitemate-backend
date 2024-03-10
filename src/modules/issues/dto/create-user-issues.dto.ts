 import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsBoolean
 } from 'class-validator';
  
  export class CreateUserIssuesDto {
    @IsString()
    @IsNotEmpty()
    title: string;
  
    @IsString()
    @IsNotEmpty()
    description: string;

    @IsBoolean()
    @IsNotEmpty()
    is_active: boolean;
  
    @IsOptional()
    createdAt: Date = new Date();
  
    @IsOptional()
    updatedAt: Date = new Date();
  
  }
  