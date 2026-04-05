import { t } from '../i18n';
import { getRouteKills } from '../store/statisticsStore';
import type { Requirement } from './Requirement';

export class RouteKillRequirement implements Requirement {
  requiredValue: number;
  routeId: string;

  constructor(routeId: string, requiredKills: number) {
    this.requiredValue = requiredKills;
    this.routeId = routeId;
  }

  hint(): string {
    return t('requirements:defeat_zoids_on_route', {
      count: this.requiredValue,
      route: t(`locations:${this.routeId}`),
    });
  }

  isCompleted(): boolean {
    return this.progress() >= this.requiredValue;
  }

  progress(): number {
    return getRouteKills(this.routeId);
  }
}
