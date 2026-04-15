import { useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { X, Heart, Bell, CreditCard, RefreshCw, Receipt, Settings, HelpCircle, LogOut, Wallet, ChevronRight, ChevronDown } from "lucide-react";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import bIcon from "@/assets/b-icon.jpeg";

interface SideMenuProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const menuItems = [
  { icon: Heart, label: "Your Likes" },
  { icon: Bell, label: "Notifications" },
  { icon: CreditCard, label: "Payment Methods" },
  { icon: RefreshCw, label: "Subscriptions" },
  { icon: Receipt, label: "Payment History" },
  { icon: Settings, label: "Privacy" },
  { icon: HelpCircle, label: "Help" },
];

const SideMenu = ({ open, onOpenChange }: SideMenuProps) => {
  const navigate = useNavigate();
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-full sm:max-w-sm p-0 flex flex-col bg-background border-l-0 shadow-2xl [&>button]:hidden">
        {/* Close */}
        <div className="flex justify-end px-5 pt-4">
          <button
            onClick={() => onOpenChange(false)}
            className="h-8 w-8 flex items-center justify-center rounded-full border border-border hover:bg-muted transition-colors"
          >
            <X className="h-4 w-4 text-muted-foreground" />
          </button>
        </div>

        {/* Profile */}
        <div className="flex items-center gap-3 px-5 mt-2 pb-5">
          <img src="https://i.pravatar.cc/150?img=15" alt="Profile" className="h-12 w-12 rounded-full object-cover ring-2 ring-border" />
          <div className="flex-1">
            <p className="font-bold text-[15px] text-foreground">estellebliah</p>
            <p className="text-xs text-muted-foreground">View your profile</p>
          </div>
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
        </div>

        {/* Wallet */}
        <div className="px-5">
          <div className="rounded-2xl px-5 py-4" style={{ backgroundColor: "hsl(347 48% 56%)" }}>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15">
                <Wallet className="h-5 w-5 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-white/70">BubbleMee Wallet</p>
                <p className="text-2xl font-bold text-white leading-tight">£45.00</p>
              </div>
              <button className="rounded-full bg-white px-4 py-1.5 text-xs font-semibold" style={{ color: "hsl(347 48% 56%)" }}>
                Add funds
              </button>
            </div>
          </div>
        </div>

        {/* Studio */}
        <div className="px-5 mt-3">
          <button
            onClick={() => { onOpenChange(false); navigate("/studio"); }}
            className="flex w-full items-center gap-3 rounded-2xl bg-foreground px-5 py-4 text-background text-left transition-transform active:scale-[0.98]"
          >
            <img src={bIcon} alt="BubbleMee" className="h-9 w-9 rounded-xl object-cover" />
            <div className="flex-1">
              <p className="font-bold text-sm">Studio</p>
              <p className="text-[11px] opacity-50">Manage your content & analytics</p>
            </div>
            <span className="rounded-full border border-background/20 px-3 py-1 text-[10px] font-medium opacity-70">Creator</span>
          </button>
        </div>

        {/* Menu items */}
        <div className="relative flex-1 overflow-hidden mt-4">
          <ScrollableMenu />
        </div>

        {/* Footer */}
        <div className="px-5 py-4 text-center">
          <p className="text-[10px] text-muted-foreground/60">© 2026 BubbleMee Limited</p>
        </div>
      </SheetContent>
    </Sheet>
  );
};

const ScrollableMenu = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showArrow, setShowArrow] = useState(true);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const check = () => {
      setShowArrow(el.scrollTop + el.clientHeight < el.scrollHeight - 10);
    };
    check();
    el.addEventListener("scroll", check);
    return () => el.removeEventListener("scroll", check);
  }, []);

  return (
    <>
      <div ref={scrollRef} className="h-full overflow-auto px-5 pb-2">
        <div className="rounded-2xl bg-muted/50 overflow-hidden">
          {menuItems.map((item, i) => (
            <button
              key={i}
              className="flex w-full items-center gap-3.5 px-4 py-3.5 text-left hover:bg-muted transition-colors active:bg-muted border-b border-border/50 last:border-0"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-background">
                <item.icon className="h-4 w-4 text-muted-foreground" />
              </div>
              <span className="text-[13px] font-medium text-foreground">{item.label}</span>
              <ChevronRight className="h-3.5 w-3.5 text-muted-foreground/50 ml-auto" />
            </button>
          ))}
        </div>
        <button className="flex w-full items-center gap-3.5 px-4 py-3.5 mt-3 rounded-2xl bg-muted/50 text-left hover:bg-muted transition-colors">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-destructive/10">
            <LogOut className="h-4 w-4 text-destructive" />
          </div>
          <span className="text-[13px] font-medium text-destructive">Log Out</span>
        </button>
      </div>
      {showArrow && (
        <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-1 pt-4 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none">
          <ChevronDown className="h-5 w-5 text-muted-foreground animate-bounce" />
        </div>
      )}
    </>
  );
};

export default SideMenu;
