import { ImportantItem } from './ImportantItem';
import type { ItemDefinition } from './Item';

export const ITEMS: Record<string, ItemDefinition> = {
  sleeper_module: new ImportantItem('sleeper_module'),
};
