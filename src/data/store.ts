import { configureStore, createSlice } from '@reduxjs/toolkit';
import type { Settings, Game } from './types';

import INITIAL_SETTINGS from './initial/settings.json';
import * as SETTINGS_REDUCERS from './reducers/settings';

import INITIAL_GAME from './initial/game.json';
import * as GAME_REDUCERS from './reducers/game';

/*----------------------------------------------------------------------------*/

const SETTINGS_SLICE = createSlice({
  name: 'settings',
  initialState: INITIAL_SETTINGS as Settings,
  reducers: SETTINGS_REDUCERS,
});

export const SETTINGS = SETTINGS_SLICE.actions;

const GAME_SLICE = createSlice({
  name: 'settings',
  initialState: INITIAL_GAME as Game,
  reducers: GAME_REDUCERS,
});

export const GAME = GAME_SLICE.actions;

/*----------------------------------------------------------------------------*/

export const STORE = configureStore({
  reducer: {
    settings: SETTINGS_SLICE.reducer,
    game: GAME_SLICE.reducer,
  },
});

/*----------------------------------------------------------------------------*/

export default STORE;