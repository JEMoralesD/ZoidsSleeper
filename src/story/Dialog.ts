import { dialogLength } from '../i18n';

export interface DialogLine {
  interpolation?: Record<string, number | string>;
  portrait?: string;
  speakerKey: string;
  textKey: string;
}

export type DialogScript = DialogLine[];

export function buildDialog(
  speakerKey: string,
  dialogKey: string,
  portrait?: string,
  interpolations?: Record<number, Record<string, number | string>>
): DialogScript {
  return Array.from({ length: dialogLength(dialogKey) }, (_, i) => ({
    ...(interpolations?.[i] && { interpolation: interpolations[i] }),
    ...(portrait && { portrait }),
    speakerKey,
    textKey: `${dialogKey}.${i}`,
  }));
}
