import { t } from '../i18n';
import { getItemCount } from '../store/inventoryStore';
import type { Requirement } from './Requirement';

export class ItemRequirement implements Requirement {
  itemId: string;
  requiredValue: number;

  constructor(itemId: string, requiredValue = 1) {
    this.itemId = itemId;
    this.requiredValue = requiredValue;
  }

  hint(): string {
    return t('requirements:item_required', {
      count: this.requiredValue,
      item: t(`items:${this.itemId}.name`),
    });
  }

  isCompleted(): boolean {
    return this.progress() >= this.requiredValue;
  }

  progress(): number {
    return getItemCount(this.itemId);
  }
}
