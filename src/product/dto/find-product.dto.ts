import { ApiProperty } from "@nestjs/swagger";
import { IsInt } from "class-validator";

export class FindProductDto {

    @ApiProperty()
    @IsInt()
    id: Number;

}