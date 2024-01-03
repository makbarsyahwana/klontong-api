import { ApiProperty } from "@nestjs/swagger";
import { MetaPaginationDto } from "src/shared/dtos/meta-pagination.dto";

export class PaginateProductDtoDetail{

    @ApiProperty()
    id: number;
    
    @ApiProperty()
    categoryId: number;
    
    @ApiProperty()
    categoryName: string;

    @ApiProperty()
    sku: string;

    @ApiProperty()
    name: string;

    @ApiProperty()
    description: string;

    @ApiProperty()
    weight: number;

    @ApiProperty()
    width: number;

    @ApiProperty()
    length: number;

    @ApiProperty()
    height: number;

    @ApiProperty()
    image: string;

    @ApiProperty()
    price: number;

    @ApiProperty()
    created_by: string;
    
    @ApiProperty()
    updated_by: string;
    
    @ApiProperty()
    created_at: Date;
    
    @ApiProperty()
    udpated_at: Date;
    
    @ApiProperty()
    deleted_at: Date;

}

export class PageProductDto {
    @ApiProperty({type: PaginateProductDtoDetail, isArray: true})
    data: PaginateProductDtoDetail[];

    @ApiProperty({type: MetaPaginationDto, isArray: false})
    meta: MetaPaginationDto;

}