import { t } from '../../i18n';
import type { NPCDialog } from '../../npc/dialogs';
import type { Requirement } from '../../requirement';
import { buildDialog, type DialogScript } from '../../story/Dialog';
import type { CityAction } from './CityAction';

export class ActionTalkToNPC implements CityAction {
  completeRequirements?: Requirement[];
  id: string;
  onExecute: (() => void) | null = null;
  requirements?: Requirement[];
  speakerId: string;

  private dialogKey: string;
  private speakerKey: string;

  constructor(speakerId: string, dialog: NPCDialog, completeRequirements?: Requirement[], requirements?: Requirement[]) {
    this.completeRequirements = completeRequirements;
    this.dialogKey = dialog.dialogKey;
    this.id = `talk-${speakerId}`;
    this.requirements = requirements;
    this.speakerId = speakerId;
    this.speakerKey = dialog.speakerKey;
  }

  get script(): DialogScript {
    return buildDialog(this.speakerKey, this.dialogKey);
  }

  getLabel(): string {
    return t('ui:talk_to_npc', { name: t(`pilots:${this.speakerId}`) });
  }

  execute(): void {
    this.onExecute?.();
  }

  isCompleted(): boolean {
    return this.completeRequirements?.every((r) => r.isCompleted()) ?? false;
  }

  isUnlocked(): boolean {
    return this.requirements?.every((r) => r.isCompleted()) ?? true;
  }
}
