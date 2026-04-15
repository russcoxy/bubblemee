import { Bell, Send, Search } from "lucide-react";
import logoText from "@/assets/logo-text.jpeg";

const AppHeader = () => {
  return (
    <header className="sticky top-0 z-40 bg-background px-4 pt-3 pb-2">
      <div className="flex items-center justify-between">
        <img src="https://i.pravatar.cc/40?img=5" alt="avatar" className="h-9 w-9 rounded-full" />
        <img src={logoText} alt="BubbleMee" className="h-7" />
        <div className="flex items-center gap-3">
          <button aria-label="Notifications"><Bell className="h-6 w-6 text-foreground" /></button>
          <button aria-label="Share"><Send className="h-6 w-6 text-foreground" /></button>
        </div>
      </div>

      <div className="mt-3 flex items-center gap-2 rounded-xl bg-muted px-4 py-2.5">
        <Search className="h-4 w-4 text-muted-foreground" />
        <span className="text-sm text-muted-foreground">Search dancers, users, hashtags…</span>
      </div>
    </header>
  );
};

export default AppHeader;
