import { createSignal, For, type Component, Show, Switch, Match } from 'solid-js';
import { changeLocale, currentLocale, t } from '../i18n';

const LANGUAGES = [
  { code: 'en', flag: '🇺🇸', label: 'English' },
  { code: 'es', flag: '🇪🇸', label: 'Español' },
];

type MenuView = 'main' | 'language';

const SettingsMenu: Component = () => {
  const [isOpen, setIsOpen] = createSignal(false);
  const [view, setView] = createSignal<MenuView>('main');

  const close = () => { setIsOpen(false); setView('main'); };
  const toggle = () => { if (isOpen()) { close(); } else { setIsOpen(true); } };

  return (
    <div class="settings-menu">
      <button class="settings-gear" onClick={toggle} title={t('ui:settings')}>
        <img class="settings-gear-icon" src="images/icons/gear-solid-full.svg" width="20" height="20" alt="Settings" />
      </button>
      <Show when={isOpen()}>
        <div class="settings-dropdown">
          <div class="settings-dropdown-header">
            <Show when={view() === 'language'}>
              <button class="settings-back" onClick={() => setView('main')}>◂</button>
            </Show>
            <span class="settings-section-title">
              {view() === 'main' ? t('ui:settings') : t('ui:language')}
            </span>
            <button class="settings-close" onClick={close}>✕</button>
          </div>
          <Switch>
            <Match when={view() === 'main'}>
              <button class="settings-menu-option" onClick={() => setView('language')}>
                <span class="settings-lang-flag">🌐</span>
                {t('ui:language')}
              </button>
            </Match>
            <Match when={view() === 'language'}>
              <For each={LANGUAGES}>
                {(lang) => (
                  <button
                    class={`settings-lang-option ${currentLocale() === lang.code ? 'active' : ''}`}
                    onClick={() => { changeLocale(lang.code); close(); }}
                  >
                    <span class="settings-lang-flag">{lang.flag}</span>
                    {lang.label}
                  </button>
                )}
              </For>
            </Match>
          </Switch>
        </div>
      </Show>
    </div>
  );
};

export default SettingsMenu;
