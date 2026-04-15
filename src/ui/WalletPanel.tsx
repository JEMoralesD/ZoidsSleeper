import { For, type Component } from 'solid-js';
import { t } from '../i18n';
import { Currency } from '../models/Currency';
import { rewardEvents, setRewardEvents } from '../store/gameStore';
import { getCurrency } from '../store/walletStore';

const WalletRewards: Component<{ currency: string }> = (props) => {
  const filtered = () => rewardEvents().filter((e) => e.currency === props.currency);
  const handleAnimationEnd = (id: number) => {
    setRewardEvents((prev) => prev.filter((e) => e.id !== id));
  };
  return (
    <For each={filtered()}>
      {(event) => (
        <span
          class="wallet-reward"
          onAnimationEnd={() => handleAnimationEnd(event.id)}
        >
          +{event.amount}
        </span>
      )}
    </For>
  );
};

const WalletIndicator: Component = () => (
  <div class="wallet-indicator">
    <img
      class="wallet-indicator-icon"
      src="images/items/magnis.png"
      alt={t('ui:magnis')}
    />
    <span class="wallet-indicator-amount">
      {getCurrency(Currency.Magnis).toLocaleString()}
      <WalletRewards currency="magnis" />
    </span>
    <img
      class="wallet-indicator-icon"
      src="images/items/zi_metal.png"
      alt={t('ui:zi_metal')}
    />
    <span class="wallet-indicator-amount">
      {getCurrency(Currency.ZiMetal).toLocaleString()}
      <WalletRewards currency="zi_metal" />
    </span>
  </div>
);

export default WalletIndicator;
