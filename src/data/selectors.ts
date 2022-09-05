import type { Store } from "./types";

/*----------------------------------------------------------------------------*/

export function theme(store: Store) {
  return store.settings.theme;
}

export function allModals(store: Store) {
  return store.game.modals;
}

export function modalOpen(store: Store, modal: string) {
  return store.game.modals.includes(modal);
}