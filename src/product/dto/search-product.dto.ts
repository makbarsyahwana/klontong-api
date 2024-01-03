import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsNumber, IsOptional, IsString } from "class-validator";

export class SearchProductDto {
    @IsNumber()
    @IsOptional()
    @ApiProperty()
    @Transform(({value}) => parseInt(value))
    page: number = 1;
    
    @IsNumber()
    @IsOptional()
    @ApiProperty()
    @Transform(({value}) => parseInt(value))
    limit: number = 10;

    @IsString()
    @IsOptional()
    @ApiProperty({required: false})
    search: string;
    
    @IsString()
    @IsOptional()
    @ApiProperty({required:false})
    sort: string;

    @IsString()
    @IsOptional()
    @ApiProperty({required:false})
    fieldsort: string;
}