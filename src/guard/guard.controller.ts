import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, SetMetadata } from '@nestjs/common';
import { GuardService } from './guard.service';
import { CreateGuardDto } from './dto/create-guard.dto';
import { UpdateGuardDto } from './dto/update-guard.dto';
import { RoleGuard } from "./role/role.guard";
import { ReqUrl, Role } from "./role/role.decorator";
import { ApiBearerAuth, ApiOperation, ApiParam, ApiQuery, ApiResponse, ApiTags } from "@nestjs/swagger";

@Controller('guard')
@ApiTags('守卫')
@ApiBearerAuth()
// controller 使用守卫
@UseGuards(RoleGuard)
export class GuardController {
  constructor(private readonly guardService: GuardService) {
  }

  @Post()
  @ApiOperation({summary: 'post', description: 'post desc'})
  create(@Body() createGuardDto: CreateGuardDto) {
    return this.guardService.create(createGuardDto);
  }

  @Get()
  // @SetMetadata('role', ['admin'])
  @ApiOperation({summary: 'get', description: 'get desc'})
  @ApiParam({name: 'id',description:'dsf', required: true})
  @ApiQuery({name: 'page', description:'分页', required: false})
  @ApiResponse({
    status: 403,
    description: "123"
  })
  @Role('admin')
  findAll(@ReqUrl("ddd") url: string) {
    console.log(url);
    return this.guardService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.guardService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGuardDto: UpdateGuardDto) {
    return this.guardService.update(+id, updateGuardDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.guardService.remove(+id);
  }
}
