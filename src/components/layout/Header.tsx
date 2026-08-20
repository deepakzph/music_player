import React from "react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";
import { ListMusic } from "lucide-react";
import PlayList from "../playlist/PlayList";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <header className="flex items-center justify-start border-b px-4 py-3">
      <div className="flex items-center gap-2">
        <Sheet>
          <SheetTrigger
            render={
              <Button
                variant="ghost"
                size="icon-sm"
                aria-label="open playlist"
                className="md:hidden"
              />
            }
          >
            <ListMusic />
          </SheetTrigger>
          <SheetContent side="left" className="p-0">
            <SheetTitle className="sr-only">Playlist</SheetTitle>
            <PlayList />
          </SheetContent>
        </Sheet>
        <h1 className="text-lg font-semibold">Music Player</h1>
      </div>
    </header>
  );
};

export default Header;
