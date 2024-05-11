import { ApiProperty } from "@nestjs/swagger";

export class CreateGuardDto {

  @ApiProperty({ example: '123', enum: [1,2,3], })
  name: string;
  @ApiProperty({ example: 12 })
  age: number;
  @ApiProperty({ example: false })
  flag: boolean;
}
