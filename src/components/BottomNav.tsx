import { useLocation, useNavigate } from "react-router-dom";
import { Home, Search, LayoutList, BarChart3, MessageCircle, User } from "lucide-react";

const tabs = [
  { icon: Home, path: "/home", label: "Home" },
  { icon: Search, path: "/discover", label: "Discover" },
  { icon: LayoutList, path: "/playlists", label: "Playlists" },
  { icon: BarChart3, path: "/stats", label: "Stats" },
  { icon: MessageCircle, path: "/messages", label: "Messages" },
  { icon: User, path: "/profile", label: "Profile" },
];

const BottomNav = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background">
      <div className="mx-auto flex max-w-screen-xl items-center justify-around py-2">
        {tabs.map(({ icon: Icon, path, label }) => {
          const active = location.pathname === path;
          return (
            <button
              key={path}
              onClick={() => navigate(path)}
              className={`flex flex-col items-center gap-0.5 px-2 py-1 text-[10px] transition-colors ${
                active ? "text-primary" : "text-muted-foreground"
              }`}
              aria-label={label}
            >
              <Icon className="h-6 w-6" strokeWidth={active ? 2.2 : 1.6} />
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
