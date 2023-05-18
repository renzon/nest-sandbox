import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  findAll(): Item[] {
    return this.itemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id): Item {
    return this.itemsService.findOne(id);
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
