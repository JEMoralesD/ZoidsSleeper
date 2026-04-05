export interface NPCDialog {
  dialogKey: string;
  speakerKey: string;
}

export const NPCDialogs: Record<string, NPCDialog> = {
  boy: { dialogKey: 'dialog:boy', speakerKey: 'pilots:boy' },
  woman: { dialogKey: 'dialog:woman', speakerKey: 'pilots:woman' },
};
