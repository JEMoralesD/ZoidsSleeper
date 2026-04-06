import type { ItemDefinition } from './Item';
import { ItemType } from './Item';

export class ImportantItem implements ItemDefinition {
  id: string;
  type: ItemType = ItemType.Important;

  constructor(id: string) {
    this.id = id;
  }
}
