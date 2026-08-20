import "./App.css";
import Header from "./components/layout/Header";
import PlayList from "./components/playlist/PlayList";
import { TooltipProvider } from "./components/ui/tooltip";

function App() {
  return (
    <TooltipProvider>
      <div className="flex h-dvh flex-col bg-background text-foreground">
        <Header />
        <div className=" flex flex-1 overflow-hidden">
          <aside className=" hidden w-72 shrink-0 border-r md:block">
            <PlayList />
          </aside>
        </div>
      </div>
    </TooltipProvider>
  );
}

export default App;
