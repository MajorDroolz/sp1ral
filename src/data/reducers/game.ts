import { PayloadAction } from '@reduxjs/toolkit';
import type { Game, Modals } from '../types';

/*----------------------------------------------------------------------------*/

export function setModals(store: Game, { payload }: PayloadAction<Modals>) {
  store.modals = payload;
}

export function toggleModal(store: Game, { payload }: PayloadAction<string>) {
  if (store.modals.includes(payload)) {
    console.log(1);
    store.modals = store.modals.filter(item => item !== payload);
  } else {
    console.log(2);
    store.modals.push(payload);
  }
}