import { beforeEach, describe, expect, it } from 'vitest';
import { ItemRequirement } from '../src/requirement';
import { addItem, loadInventory } from '../src/store/inventoryStore';

describe('ItemRequirement', () => {
  beforeEach(() => {
    loadInventory({});
  });

  it('should not be completed when item is not owned', () => {
    const req = new ItemRequirement('sleeper_module');

    expect(req.isCompleted()).toBe(false);
  });

  it('should be completed when item count reaches required value', () => {
    addItem('sleeper_module', 1);
    const req = new ItemRequirement('sleeper_module');

    expect(req.isCompleted()).toBe(true);
  });

  it('should return a descriptive hint', () => {
    const req = new ItemRequirement('sleeper_module', 2);

    expect(req.hint()).toContain('2');
  });

  it('should return current item count as progress', () => {
    addItem('sleeper_module', 3);
    const req = new ItemRequirement('sleeper_module', 5);

    expect(req.progress()).toBe(3);
  });
});
