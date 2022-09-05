import { PayloadAction } from '@reduxjs/toolkit';
import type { Theme, Settings } from '../types';

/*----------------------------------------------------------------------------*/

export function setTheme(store: Settings, { payload }: PayloadAction<Theme>) {
  store.theme = payload;
}