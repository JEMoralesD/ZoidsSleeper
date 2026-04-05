import { For, type Component } from 'solid-js';
import { t } from '../i18n';
import type { City } from '../landmark';
import { isCityActionVisible } from '../landmark';
import { currentLandmark, landmarkBackground } from '../store/landmarkStore';

const IdleLandmarkScreen: Component = () => {
  const actions = () => ((currentLandmark() as City).actions ?? []).filter(isCityActionVisible);

  return (
    <div class="battle-screen">
      <div class="enemy-section">
        <h2 class="enemy-name">{t(`locations:${currentLandmark().id}`)}</h2>
        <div
          class="battle-area"
          style={{ 'background-image': `url('${landmarkBackground()}')`, 'background-size': 'cover' }}
        >
          <div class="city-actions">
            <For each={actions()}>
              {(action) => (
                <button class="city-action-btn" onClick={() => action.execute()}>
                  {action.getLabel()}
                </button>
              )}
            </For>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdleLandmarkScreen;
