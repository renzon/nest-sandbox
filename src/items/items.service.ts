import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';

@Injectable()
export class ItemsService {
  private readonly items: Item[] = [
    {
      id: '123',
      name: 'Item One',
      qty: 4,
      description: 'Fist Item',
    },
    {
      id: '321',
      name: 'Second One',
      qty: 2,
      description: 'Second Item',
    },
  ];

  findAll(): Item[] {
    return this.items;
  }
}
