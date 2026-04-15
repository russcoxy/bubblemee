import { X, Heart, Bell, CreditCard, RefreshCw, Receipt, Settings, HelpCircle, LogOut, Wallet } from "lucide-react";
import { Sheet, SheetContent } from "@/components/ui/sheet";

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
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-full max-w-sm p-0 flex flex-col [&>button]:hidden">
        {/* Close */}
        <div className="flex justify-end px-4 pt-3">
          <button onClick={() => onOpenChange(false)} className="h-7 w-7 flex items-center justify-center rounded-full bg-muted">
            <X className="h-3.5 w-3.5" />
          </button>
        </div>

        {/* Profile */}
        <div className="flex items-center gap-3 px-4 pb-3 border-b border-border">
          <img src="https://i.pravatar.cc/150?img=15" alt="Profile" className="h-11 w-11 rounded-full object-cover" />
          <div>
            <p className="font-bold text-sm">estellebliah</p>
            <p className="text-xs text-muted-foreground">View your profile</p>
          </div>
        </div>

        {/* Wallet */}
        <div className="px-4 pt-3">
          <div className="rounded-xl bg-primary px-4 py-3 text-primary-foreground">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-foreground/20">
                <Wallet className="h-4 w-4" />
              </div>
              <div className="flex-1">
                <p className="text-[10px] font-semibold uppercase tracking-wide opacity-80">BubbleMee Wallet</p>
                <p className="text-lg font-bold">£45.00</p>
              </div>
              <button className="rounded-full border border-primary-foreground/40 px-3 py-1 text-xs font-medium">
                Add funds
              </button>
            </div>
          </div>
        </div>

        {/* Studio */}
        <div className="px-4 pt-2">
          <div className="flex items-center gap-2.5 rounded-xl bg-foreground px-4 py-3 text-background">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-pink-500 to-orange-400 flex items-center justify-center text-white font-bold text-sm">
              B
            </div>
            <div className="flex-1">
              <p className="font-bold text-sm">Studio</p>
              <p className="text-[10px] opacity-60">Manage your content & analytics</p>
            </div>
            <span className="rounded-full border border-background/30 px-2.5 py-0.5 text-[10px] font-medium">Creator</span>
          </div>
        </div>

        {/* Menu items */}
        <div className="flex-1 overflow-auto px-4 pt-2">
          {menuItems.map((item, i) => (
            <button key={i} className="flex w-full items-center gap-3 border-b border-border py-3 text-left">
              <item.icon className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium">{item.label}</span>
            </button>
          ))}
          <button className="flex w-full items-center gap-3 py-3 text-left text-destructive">
            <LogOut className="h-4 w-4" />
            <span className="text-sm font-medium">Log Out</span>
          </button>
        </div>

        {/* Footer */}
        <div className="px-4 py-3 text-center">
          <p className="text-[10px] text-muted-foreground">© 2026 BubbleMee Limited</p>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default SideMenu;
