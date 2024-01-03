import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString, IsDate } from "class-validator";

export class CreateProductDto{
    
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    categoryId: number;
    
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    categoryName: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    sku: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    description: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    weight: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    width: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    length: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    height: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    image: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    price: number;

    @ApiProperty()
    @IsString()
    created_by: string;

}