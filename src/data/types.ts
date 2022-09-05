export type Theme = "light" | "dark";

export interface Settings {
  theme: Theme;
}

export type Modals = string[];

export interface Game {
  modals: Modals;
}

export interface Store {
  settings: Settings;
  game: Game;
}