import { t } from '../i18n';
import { getPilotDefeats } from '../store/statisticsStore';
import type { Requirement } from './Requirement';

export class PilotDefeatRequirement implements Requirement {
  pilotId: string;
  requiredValue: number;

  constructor(pilotId: string, requiredDefeats = 1) {
    this.pilotId = pilotId;
    this.requiredValue = requiredDefeats;
  }

  hint(): string {
    return t('requirements:defeat_pilot', { name: t(`pilots:${this.pilotId}`) });
  }

  isCompleted(): boolean {
    return this.progress() >= this.requiredValue;
  }

  progress(): number {
    return getPilotDefeats(this.pilotId);
  }
}
