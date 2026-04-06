import { For, Show, type Component } from 'solid-js';
import { ITEMS } from '../item';
import { t } from '../i18n';
import { inventory } from '../store/inventoryStore';
import { ItemType } from '../item';

interface SuppliesPanelProps {
  onClose: () => void;
}

const SuppliesPanel: Component<SuppliesPanelProps> = (props) => {
  const ownedItems = () =>
    Object.entries(inventory())
      .filter(([, count]) => count > 0)
      .map(([id, count]) => ({ count, id, type: ITEMS[id]?.type }));

  return (
    <div class="supplies-overlay" onClick={() => props.onClose()}>
      <div class="supplies-panel" onClick={(e) => e.stopPropagation()}>
        <div class="supplies-header">
          <span class="supplies-title">{t('ui:supplies')}</span>
          <button class="supplies-close" onClick={() => props.onClose()}>✕</button>
        </div>
        <Show when={ownedItems().length > 0} fallback={<p class="supplies-empty">{t('ui:supplies_empty')}</p>}>
          <div class="supplies-list">
            <For each={ownedItems()}>
              {(item) => (
                <div class="supplies-item">
                  <span class={`supplies-item-type ${item.type === ItemType.Important ? 'type-important' : 'type-consumable'}`}>
                    {item.type === ItemType.Important ? '★' : '◆'}
                  </span>
                  <div class="supplies-item-info">
                    <span class="supplies-item-name">{t(`items:${item.id}.name`)}</span>
                    <span class="supplies-item-desc">{t(`items:${item.id}.description`)}</span>
                  </div>
                  <span class="supplies-item-count">×{item.count}</span>
                </div>
              )}
            </For>
          </div>
        </Show>
      </div>
    </div>
  );
};

export default SuppliesPanel;
