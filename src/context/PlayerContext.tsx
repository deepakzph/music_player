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
