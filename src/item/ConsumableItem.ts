import type { ItemDefinition } from './Item';
import { ItemType } from './Item';

export class ConsumableItem implements ItemDefinition {
  id: string;
  type: ItemType = ItemType.Consumable;

  constructor(id: string) {
    this.id = id;
  }
}
