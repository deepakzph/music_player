import { useState } from "react";
import type { PlaylistFilter } from "../types/music";
import { Button } from "../ui/button";
import SearchBar from "./SearchBar";
import { ScrollArea } from "../ui/scroll-area";
import { cn } from "@/lib/utils";

const FILTERS: { key: PlaylistFilter; label: string }[] = [
  { key: "all", label: "All" },
  { key: "favorites", label: "Favorites" },
  { key: "recent", label: "Recent" },
];
const PlayList = () => {
  const [filter, setFilter] = useState<PlaylistFilter>("all");
  return (
    <div className="flex h-full flex-col gap-3 p-3">
      <SearchBar />
      <div className="flex gap-1">
        {FILTERS.map(({ key, label }) => (
          <Button
            key={key}
            variant={filter === key ? "default" : "outline"}
            className={cn("flex-1", filter === key && "font-medium")}
            onClick={() => setFilter(key)}
          >
            {label}
          </Button>
        ))}
      </div>
      <ScrollArea className="flex-1">
        <div className="flex flex-col gap-0.5 pr-2">
          <p>music</p>
        </div>
      </ScrollArea>
    </div>
  );
};

export default PlayList;
