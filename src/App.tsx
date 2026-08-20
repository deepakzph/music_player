import "./App.css";
import Header from "./components/layout/Header";
import { TooltipProvider } from "./components/ui/tooltip";

function App() {
  return (
    <TooltipProvider>
      <div className="flex h-dvh flex-col bg-background text-foreground">
        <Header />
      </div>
    </TooltipProvider>
  );
}

export default App;
