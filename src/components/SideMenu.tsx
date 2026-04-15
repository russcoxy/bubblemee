import { X, Heart, Bell, CreditCard, RefreshCw, Receipt, Settings, HelpCircle, LogOut, Wallet } from "lucide-react";
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
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-full max-w-sm p-0 flex flex-col [&>button]:hidden">
        {/* Close */}
        <div className="flex justify-end px-3 pt-2">
          <button onClick={() => onOpenChange(false)} className="h-6 w-6 flex items-center justify-center rounded-full bg-muted">
            <X className="h-3 w-3" />
          </button>
        </div>

        {/* Profile */}
        <div className="flex items-center gap-2.5 px-4 pb-2.5 border-b border-border">
          <img src="https://i.pravatar.cc/150?img=15" alt="Profile" className="h-10 w-10 rounded-full object-cover" />
          <div>
            <p className="font-bold text-sm leading-tight">estellebliah</p>
            <p className="text-[11px] text-muted-foreground">View your profile</p>
          </div>
        </div>

        {/* Wallet */}
        <div className="px-4 pt-2.5">
          <div className="rounded-xl px-4 py-3" style={{ backgroundColor: "#c27080" }}>
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg" style={{ backgroundColor: "rgba(255,255,255,0.2)" }}>
                <Wallet className="h-4 w-4 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-[9px] font-semibold uppercase tracking-wider text-white/80">BubbleMee Wallet</p>
                <p className="text-xl font-bold text-white leading-tight">£45.00</p>
              </div>
              <button className="rounded-full bg-white px-3 py-1 text-[11px] font-medium" style={{ color: "#c27080" }}>
                Add funds
              </button>
            </div>
          </div>
        </div>

        {/* Studio */}
        <div className="px-4 pt-2">
          <div className="flex items-center gap-2.5 rounded-xl bg-foreground px-4 py-2.5 text-background">
            <img src={bIcon} alt="BubbleMee" className="h-8 w-8 rounded-lg object-cover" />
            <div className="flex-1">
              <p className="font-bold text-[13px] leading-tight">Studio</p>
              <p className="text-[10px] opacity-60">Manage your content & analytics</p>
            </div>
            <span className="rounded-full border border-background/30 px-2 py-0.5 text-[10px] font-medium">Creator</span>
          </div>
        </div>

        {/* Menu items */}
        <div className="flex-1 overflow-auto px-4 pt-1.5">
          {menuItems.map((item, i) => (
            <button key={i} className="flex w-full items-center gap-3 border-b border-border py-2.5 text-left">
              <item.icon className="h-4 w-4 text-muted-foreground" />
              <span className="text-[13px] font-medium">{item.label}</span>
            </button>
          ))}
          <button className="flex w-full items-center gap-3 py-2.5 text-left text-destructive">
            <LogOut className="h-4 w-4" />
            <span className="text-[13px] font-medium">Log Out</span>
          </button>
        </div>

        {/* Footer */}
        <div className="px-4 py-2 text-center">
          <p className="text-[9px] text-muted-foreground">© 2026 BubbleMee Limited</p>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default SideMenu;
