import type { ZoidRef } from '../models/Zoid';

export interface Pilot {
  id: string;
  name: string;
  zoids: ZoidRef[];
}

export const PILOTS: Record<string, Pilot> = {
  bandit1: {
    id: 'bandit1',
    name: 'Bandit',
    zoids: [
      { id: 'molga', level: 5 },
    ],
  },
};

export function getPilotImage(id: string): string {
  return `images/pilots/${id}.png`;
}
