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
        {/* Close button */}
        <div className="flex justify-end p-4">
          <button onClick={() => onOpenChange(false)} className="h-8 w-8 flex items-center justify-center rounded-full bg-muted">
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Profile */}
        <div className="flex items-center gap-3 px-5 pb-4 border-b border-border">
          <img src="https://i.pravatar.cc/150?img=15" alt="Profile" className="h-14 w-14 rounded-full object-cover" />
          <div>
            <p className="font-bold text-base">estellebliah</p>
            <p className="text-sm text-muted-foreground">View your profile</p>
          </div>
        </div>

        {/* Wallet card */}
        <div className="px-5 pt-5">
          <div className="rounded-2xl bg-primary px-5 py-4 text-primary-foreground">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-foreground/20">
                <Wallet className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <p className="text-xs font-semibold uppercase tracking-wide opacity-80">BubbleMee Wallet</p>
                <p className="text-2xl font-bold">£45.00</p>
              </div>
              <button className="rounded-full border border-primary-foreground/40 px-4 py-1.5 text-sm font-medium">
                Add funds
              </button>
            </div>
          </div>
        </div>

        {/* Studio card */}
        <div className="px-5 pt-3">
          <div className="flex items-center gap-3 rounded-2xl bg-foreground px-5 py-4 text-background">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-pink-500 to-orange-400 flex items-center justify-center text-white font-bold text-lg">
              B
            </div>
            <div className="flex-1">
              <p className="font-bold">Studio</p>
              <p className="text-xs opacity-60">Manage your content & analytics</p>
            </div>
            <span className="rounded-full border border-background/30 px-3 py-1 text-xs font-medium">Creator</span>
          </div>
        </div>

        {/* Menu items */}
        <div className="flex-1 overflow-auto px-5 pt-4">
          {menuItems.map((item, i) => (
            <button key={i} className="flex w-full items-center gap-4 border-b border-border py-4 text-left">
              <item.icon className="h-5 w-5 text-muted-foreground" />
              <span className="text-base font-medium">{item.label}</span>
            </button>
          ))}

          {/* Log Out */}
          <button className="flex w-full items-center gap-4 py-4 text-left text-destructive">
            <LogOut className="h-5 w-5" />
            <span className="text-base font-medium">Log Out</span>
          </button>
        </div>

        {/* Footer */}
        <div className="px-5 py-4 text-center">
          <p className="text-xs text-muted-foreground">© 2026 BubbleMee Limited</p>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default SideMenu;
