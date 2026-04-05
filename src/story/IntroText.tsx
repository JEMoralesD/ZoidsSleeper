import { createSignal, For, type Component } from 'solid-js';
import { t } from '../i18n';
import { PLANET_INTRO_KEYS } from './introScript';

interface IntroTextProps {
  onComplete: () => void;
}

const IntroText: Component<IntroTextProps> = (props) => {
  const [visibleCount, setVisibleCount] = createSignal(1);

  const handleClick = () => {
    if (visibleCount() < PLANET_INTRO_KEYS.length) {
      setVisibleCount((c) => c + 1);
    } else {
      props.onComplete();
    }
  };

  return (
    <div class="intro-text" onClick={handleClick}>
      <img class="intro-image" src="images/towns/Zi.jpg" alt="Planet Zi" />
      <For each={PLANET_INTRO_KEYS.slice(0, visibleCount())}>
        {(key) => <p>{t(key)}</p>}
      </For>
      <div class="intro-continue">{t('ui:click_to_continue')}</div>
    </div>
  );
};

export default IntroText;
