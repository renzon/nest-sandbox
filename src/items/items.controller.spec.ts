import { Test, TestingModule } from '@nestjs/testing';
import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';

describe('ItemsController', () => {
  let controller: ItemsController;
  let service: ItemsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ItemsController],
      providers: [ItemsService],
    }).compile();

    controller = module.get<ItemsController>(ItemsController);
    service = module.get<ItemsService>(ItemsService);
  });

  it('Items should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should return array of items', async () => {
      const result = [
        {
          id: 123,
          name: 'Item One',
          qty: 4,
          description: 'Fist Item',
        },
        {
          id: 321,
          name: 'Second One',
          qty: 2,
          description: 'Second Item',
        },
      ];
      jest.spyOn(controller, 'findAll').mockImplementation(() => result);
    });
  });
});
