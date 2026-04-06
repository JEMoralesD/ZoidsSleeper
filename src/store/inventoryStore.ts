import { createSignal } from 'solid-js';
import { ItemType } from '../item';
import { ITEMS } from '../item';

const [inventory, setInventory] = createSignal<Record<string, number>>({});

function addItem(itemId: string, amount: number, unique = false): void {
  if (unique && getItemCount(itemId) > 0) {
    return;
  }
  setInventory((prev) => ({ ...prev, [itemId]: (prev[itemId] ?? 0) + amount }));
}

function getItemCount(itemId: string): number {
  return inventory()[itemId] ?? 0;
}

function loadInventory(data: Record<string, number>): void {
  setInventory(data);
}

function removeItem(itemId: string, amount: number): void {
  const item = ITEMS[itemId];
  if (!item || item.type !== ItemType.Consumable) {
    return;
  }
  setInventory((prev) => {
    const current = prev[itemId] ?? 0;
    const next = Math.max(0, current - amount);
    return { ...prev, [itemId]: next };
  });
}

export { addItem, getItemCount, inventory, loadInventory, removeItem };
