import type { Requirement } from '../../requirement';

export interface CityAction {
  completeRequirements?: Requirement[];
  id: string;
  requirements?: Requirement[];
  execute(): void;
  getLabel(): string;
  isCompleted(): boolean;
  isUnlocked(): boolean;
}

export function isCityActionVisible(action: CityAction): boolean {
  return action.isUnlocked() && !action.isCompleted();
}
