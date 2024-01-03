import {ApiProperty} from "@nestjs/swagger";

export class MetaPaginationDto {

    @ApiProperty()
    page: number;

    @ApiProperty()
    limit: number;

    @ApiProperty()
    totalPage: number;

    @ApiProperty()
    totalData: number;

}

