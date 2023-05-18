import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';

@Controller('items')
export class ItemsController {
  @Get()
  findAll(): string {
    return 'Get all items';
  }

  @Get(':id')
  findOne(@Param('id') id): string {
    return `Item: ${id}`;
  }
  @Delete(':id')
  delete(@Param('id') id): string {
    return `Deleted item with id: ${id}`;
  }

  @Put(':id')
  put(@Param('id') id, @Body() putItemDto: CreateItemDto): string {
    return `Put item with id: ${id} Name: ${putItemDto.name} Description: ${putItemDto.description} Description: ${putItemDto.qty}\``;
  }

  @Post()
  create(@Body() createItemDto: CreateItemDto): string {
    return `Name: ${createItemDto.name} Description: ${createItemDto.description} Description: ${createItemDto.qty}`;
  }
}
