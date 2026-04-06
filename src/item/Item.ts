export const ItemType = { Consumable: 'consumable', Important: 'important' } as const;
export type ItemType = (typeof ItemType)[keyof typeof ItemType];

export interface ItemDefinition {
  id: string;
  type: ItemType;
}
