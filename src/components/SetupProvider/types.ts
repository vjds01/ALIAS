import { ReactNode } from 'react';

import { EDictionaryTypes, IGameDictionary, IGameSettings, IWords, TGameTeams } from '~/types';

export enum ESetupState {
  Setup = 'Setup',
  Complete = 'Complete',
}

export interface ISetupState {
  state: ESetupState;
  teams: TGameTeams;
  settings: IGameSettings;
  dictionary: IGameDictionary | null;
  playedWords: IWords;
}

export type TUpdateKey = keyof Omit<ISetupState, 'state'>;
export type TUpdateValue = ISetupState[TUpdateKey];

export interface ISetupContext extends ISetupState {
  updateSetupState: (key: TUpdateKey, value: TUpdateValue) => void;
  completeSetup: () => void;
  initializeSetup: () => void;
  addPlayedWord: (type: EDictionaryTypes, word: string) => void;
  resetPlayedWords: () => void;
}

export interface ISetupProviderProps {
  children: ReactNode;
}
