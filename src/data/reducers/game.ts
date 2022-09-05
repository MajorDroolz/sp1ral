import { PayloadAction } from '@reduxjs/toolkit';
import type { Game, Modals } from '../types';

/*----------------------------------------------------------------------------*/

export function setModals(store: Game, { payload }: PayloadAction<Modals>) {
  store.modals = payload;
}

export function toggleModal(store: Game, { payload }: PayloadAction<string>) {
  if (store.modals.includes(payload)) {
    store.modals = store.modals.filter(item => item !== payload);
  } else {
    store.modals.push(payload);
  }
}