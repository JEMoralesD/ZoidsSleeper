export interface PlayerStats {
  attackMult: number;
  baseHealth: number;
  clickAttack: number;
}

export const DEFAULT_PLAYER: PlayerStats = {
  attackMult: 1,
  baseHealth: 10,
  clickAttack: 1,
};
