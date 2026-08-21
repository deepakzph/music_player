import type { RepeatMode, Track } from "@/components/types/music";

interface PlayerState {
  library: Track[];
  playOrder: number[];
  orderPosition: number;
  isPlaying: boolean;
  progress: number;
  duration: number;
  volume: number;
  isMuted: boolean;
  shuffle: boolean;
  repeatMode: RepeatMode;
  favorites: string[];
  recentlyPlayed: string[];
  searchQuery: string;
  isMiniPlayer: boolean;
}

type Action =
  | { type: "PLAY_TRACK"; libraryIndex: number }
  | { type: "TOGGLE_PLAY" }
  | { type: "SET_PLAYING"; isPlaying: boolean }
  | { type: "NEXT" }
  | { type: "PREVIOUS" }
  | { type: "SET_PROGRESS"; progress: number; duration: number }
  | { type: "SET_VOLUME"; volume: number }
  | { type: "TOGGLE_MUTE" }
  | { type: "TOGGLE_SHUFFLE" }
  | { type: "CYCLE_REPEAT" }
  | { type: "TOGGLE_FAVORITE"; id: string }
  | { type: "SET_SEARCH"; query: string }
  | { type: "TOGGLE_MINI_PLAYER" };
