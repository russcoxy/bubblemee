import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ChevronLeft, Wallet, Video, ShoppingBag, Users, CreditCard, TrendingUp, Eye,
  Heart, Pencil, Trash2, Plus, Search, RefreshCw, Package, PoundSterling,
  BarChart3, EyeOff
} from "lucide-react";
import bIcon from "@/assets/b-icon.jpeg";

type StudioTab = "dashboard" | "videos" | "shop" | "memberships" | "subscribers" | "payouts" | "insights" | "profile";

const tabs: { key: StudioTab; label: string }[] = [
  { key: "dashboard", label: "Dashboard" },
  { key: "videos", label: "Videos" },
  { key: "shop", label: "Shop" },
  { key: "memberships", label: "Memberships" },
  { key: "subscribers", label: "Subscribers" },
  { key: "payouts", label: "Payouts" },
  { key: "insights", label: "Insights" },
  { key: "profile", label: "Profile" },
];

const videos = [
  { title: "Kiss More", thumb: "https://images.unsplash.com/photo-1547153760-18fc86ef706d?w=200&q=80", views: 182, likes: 0 },
  { title: "Laxed (Siren Beat)", thumb: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=200&q=80", views: 115, likes: 1 },
  { title: "Cupid", thumb: "https://images.unsplash.com/photo-1535525153412-5a42439a210d?w=200&q=80", views: 119, likes: 0 },
  { title: "Blinding Lights", thumb: "https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=200&q=80", views: 92, likes: 0 },
  { title: "Out West", thumb: "https://images.unsplash.com/photo-1550026593-f369f4955b88?w=200&q=80", views: 67, likes: 1 },
  { title: "Corvette", thumb: "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=200&q=80", views: 58, likes: 0 },
  { title: "Say So", thumb: "https://images.unsplash.com/photo-1547153760-18fc86ef706d?w=200&q=80", views: 45, likes: 2 },
];

const shopItems = [
  { title: "Dance Is My Favorite Season Swe...", category: "Clothing", price: "£30.00", stock: 5, thumb: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=200&q=80" },
  { title: "This Is My Dance Hangover Hoodie", category: "Clothing", price: "£25.00", stock: 5, thumb: "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=200&q=80" },
  { title: "Ulrike Stylish Winter Hoodie", category: "Clothing", price: "£30.00", stock: 1, thumb: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=200&q=80" },
];

const memberships = [
  { name: "Gold", monthlyPrice: "£15.00", yearlyPrice: "£150.00", members: 0 },
  { name: "Silver", monthlyPrice: "£10.00", yearlyPrice: "£100.00", members: 0 },
  { name: "Bronze", monthlyPrice: "£5.00", yearlyPrice: "£50.00", members: 0 },
];

const Studio = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<StudioTab>("dashboard");
  const [videoFilter, setVideoFilter] = useState("All");
  const [shopFilter, setShopFilter] = useState("Active");
  const [subFilter, setSubFilter] = useState("All");

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-black px-4 pt-3 pb-0">
        <div className="flex items-center justify-between">
          <button onClick={() => navigate(-1)}>
            <ChevronLeft className="h-6 w-6" />
          </button>
          <div className="flex items-center gap-2">
            <img src={bIcon} alt="BubbleMee" className="h-6 w-6 rounded" />
            <span className="font-bold text-lg">Studio</span>
          </div>
          <div className="flex items-center gap-1 rounded-full border border-white/20 px-3 py-1.5">
            <Wallet className="h-3.5 w-3.5 text-emerald-400" />
            <span className="text-xs font-medium">£508.00</span>
          </div>
        </div>

        {/* Tab bar */}
        <div className="mt-3 flex justify-center gap-1 overflow-x-auto pb-2 scrollbar-none">
          {tabs.map(tab => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`whitespace-nowrap rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors ${
                activeTab === tab.key
                  ? "bg-white text-black"
                  : "text-white/60"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="px-4 pb-8 mx-auto md:w-[60%]">
        {/* DASHBOARD */}
        {activeTab === "dashboard" && (
          <div>
            <h1 className="mt-4 text-2xl font-bold">Welcome back, Estelle</h1>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <StatCard icon={<Video className="h-4 w-4 text-pink-400" />} iconBg="bg-pink-400/20" value="7" label="Videos" />
              <StatCard icon={<Users className="h-4 w-4 text-blue-400" />} iconBg="bg-blue-400/20" value="0" label="Subscribers" />
              <StatCard icon={<PoundSterling className="h-4 w-4 text-emerald-400" />} iconBg="bg-emerald-400/20" value="£508.00" label="Earnings" />
              <StatCard icon={<TrendingUp className="h-4 w-4 text-yellow-600" />} iconBg="bg-yellow-600/20" value="0.5%" label="Engagement" />
            </div>

            <div className="mt-6 flex items-center justify-between">
              <h2 className="text-lg font-bold">Latest Videos</h2>
              <button className="text-sm text-pink-400">See all</button>
            </div>
            <div className="mt-3 flex flex-col gap-2">
              {videos.slice(0, 3).map((v, i) => (
                <VideoRow key={i} video={v} />
              ))}
            </div>
          </div>
        )}

        {/* VIDEOS */}
        {activeTab === "videos" && (
          <div>
            <div className="mt-4 flex gap-2 overflow-x-auto">
              {["All", "Published", "Draft", "Scheduled", "Archived"].map(f => (
                <button
                  key={f}
                  onClick={() => setVideoFilter(f)}
                  className={`whitespace-nowrap rounded-full px-3.5 py-1.5 text-xs font-medium ${
                    videoFilter === f ? "bg-white text-black" : "text-white/60"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
            <div className="mt-4 flex flex-col gap-2">
              {videos.map((v, i) => (
                <div key={i} className="flex items-center gap-3 rounded-xl bg-white/5 p-3">
                  <img src={v.thumb} alt={v.title} className="h-16 w-20 rounded-lg object-cover" />
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm">{v.title}</p>
                    <span className="inline-block mt-1 rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-medium text-emerald-400">Published</span>
                    <div className="mt-1 flex items-center gap-3 text-xs text-white/50">
                      <span className="flex items-center gap-1"><Eye className="h-3 w-3" />{v.views}</span>
                      <span className="flex items-center gap-1"><Heart className="h-3 w-3" />{v.likes}</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <button className="rounded-lg bg-white/10 p-1.5"><Pencil className="h-3.5 w-3.5 text-white/50" /></button>
                    <button className="rounded-lg bg-white/10 p-1.5"><Trash2 className="h-3.5 w-3.5 text-white/50" /></button>
                  </div>
                </div>
              ))}
            </div>
            <button className="fixed bottom-6 right-6 flex h-14 w-14 items-center justify-center rounded-full bg-pink-500 shadow-lg">
              <Plus className="h-6 w-6 text-white" />
            </button>
          </div>
        )}

        {/* SHOP */}
        {activeTab === "shop" && (
          <div>
            <div className="mt-4 flex gap-2">
              {["Active", "All"].map(f => (
                <button
                  key={f}
                  onClick={() => setShopFilter(f)}
                  className={`rounded-full px-3.5 py-1.5 text-xs font-medium ${
                    shopFilter === f ? "bg-white text-black" : "text-white/60"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <StatCard icon={<ShoppingBag className="h-4 w-4 text-pink-400" />} iconBg="bg-pink-400/20" value="15" label="Products Sold" />
              <StatCard icon={<TrendingUp className="h-4 w-4 text-yellow-600" />} iconBg="bg-yellow-600/20" value="£478.50" label="This Week" />
              <StatCard icon={<PoundSterling className="h-4 w-4 text-emerald-400" />} iconBg="bg-emerald-400/20" value="£508.00" label="This Month" />
              <StatCard icon={<Package className="h-4 w-4 text-blue-400" />} iconBg="bg-blue-400/20" value="£508.00" label="Total Earnings" />
            </div>
            <div className="mt-4 flex flex-col gap-2">
              {shopItems.map((item, i) => (
                <div key={i} className="flex items-center gap-3 rounded-xl bg-white/5 p-3">
                  <img src={item.thumb} alt={item.title} className="h-16 w-16 rounded-lg object-cover" />
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm truncate">{item.title}</p>
                    <p className="text-xs text-white/50">{item.category}</p>
                    <p className="text-sm font-bold text-pink-400">{item.price}</p>
                    <div className="mt-1 flex gap-1.5">
                      <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] text-white/60">Stock: {item.stock}</span>
                      <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] text-emerald-400">Active</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <button className="rounded-lg bg-white/10 p-1.5"><Pencil className="h-3.5 w-3.5 text-white/50" /></button>
                    <button className="rounded-lg bg-white/10 p-1.5"><Trash2 className="h-3.5 w-3.5 text-white/50" /></button>
                  </div>
                </div>
              ))}
            </div>
            <button className="fixed bottom-6 right-6 flex h-14 w-14 items-center justify-center rounded-full bg-pink-500 shadow-lg">
              <Plus className="h-6 w-6 text-white" />
            </button>
          </div>
        )}

        {/* MEMBERSHIPS */}
        {activeTab === "memberships" && (
          <div className="mt-4 flex flex-col gap-4">
            {memberships.map((m, i) => (
              <div key={i} className="rounded-xl bg-white/5 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold">{m.name}</h3>
                  <span className="rounded-full border border-emerald-400/40 px-2.5 py-0.5 text-xs text-emerald-400">Active</span>
                </div>
                <p className="mt-1">
                  <span className="font-bold text-pink-400">{m.monthlyPrice}/month</span>
                  <span className="ml-2 text-sm text-white/50">{m.yearlyPrice}/year</span>
                </p>
                <p className="mt-1 text-sm text-white/50">Some text here</p>
                <div className="mt-1 flex items-center gap-1 text-xs text-white/50">
                  <Users className="h-3 w-3" />
                  {m.members} active members
                </div>
                <div className="mt-3 flex gap-2">
                  <button className="flex items-center gap-1.5 rounded-lg bg-white/10 px-3 py-2 text-xs"><Pencil className="h-3 w-3" />Edit</button>
                  <button className="flex items-center gap-1.5 rounded-lg bg-white/10 px-3 py-2 text-xs"><EyeOff className="h-3 w-3" />Unpublish</button>
                  <button className="flex items-center gap-1.5 rounded-lg border border-red-500/40 px-3 py-2 text-xs text-red-400"><Trash2 className="h-3 w-3" />Delete</button>
                </div>
              </div>
            ))}
            <button className="fixed bottom-6 right-6 flex h-14 w-14 items-center justify-center rounded-full bg-pink-500 shadow-lg">
              <Plus className="h-6 w-6 text-white" />
            </button>
          </div>
        )}

        {/* SUBSCRIBERS */}
        {activeTab === "subscribers" && (
          <div>
            <div className="mt-4 flex gap-2">
              <span className="rounded-lg bg-white/10 px-3 py-1.5 text-sm"><strong>0</strong> Total</span>
              <span className="rounded-lg bg-white/10 px-3 py-1.5 text-sm"><strong className="text-emerald-400">0</strong> Active</span>
            </div>
            <div className="mt-3 flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2.5">
              <Search className="h-4 w-4 text-white/40" />
              <span className="text-sm text-white/40">Search by name or tier...</span>
            </div>
            <div className="mt-3 flex gap-2">
              {["All", "Active", "Inactive"].map(f => (
                <button
                  key={f}
                  onClick={() => setSubFilter(f)}
                  className={`rounded-full px-3.5 py-1.5 text-xs font-medium ${
                    subFilter === f ? "bg-pink-500 text-white" : "rounded-full border border-white/20 text-white/60"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
            <p className="mt-12 text-center text-white/40">No subscribers yet</p>
          </div>
        )}

        {/* PAYOUTS */}
        {activeTab === "payouts" && (
          <div>
            <div className="mt-4 rounded-xl bg-white/5 p-6 text-center">
              <p className="text-sm text-white/50">Available to withdraw</p>
              <p className="mt-1 text-3xl font-bold">£508.00</p>
              <button className="mt-3 flex mx-auto items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm">
                <RefreshCw className="h-3.5 w-3.5" />Refresh Balance
              </button>
            </div>
            <div className="mt-4 rounded-xl bg-white/5 p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CreditCard className="h-4 w-4 text-white/50" />
                  <span className="font-bold text-sm">Bank Account</span>
                </div>
                <button className="text-xs text-white/50">Edit</button>
              </div>
              <div className="mt-3 border-t border-white/10 pt-3">
                <p className="font-bold text-sm">STRIPE TEST BANK</p>
                <p className="text-xs text-white/50">10-88-00</p>
                <div className="flex items-center justify-between">
                  <p className="text-xs text-white/50">•••• 2345</p>
                  <span className="rounded-full border border-white/20 px-2 py-0.5 text-[10px] text-white/50">new</span>
                </div>
              </div>
            </div>
            <button className="mt-4 w-full rounded-xl bg-pink-500 py-3.5 text-center font-bold">
              Withdraw Funds
            </button>
            <div className="mt-3 flex items-center justify-between rounded-xl bg-white/5 px-4 py-3">
              <span className="text-sm text-white/50">Auto withdrawal is off</span>
              <button className="text-xs text-pink-400">Edit</button>
            </div>
          </div>
        )}

        {/* INSIGHTS */}
        {activeTab === "insights" && (
          <div>
            <div className="mt-4 flex gap-2 overflow-x-auto">
              {["Overview", "Audience", "Revenue", "Content"].map((f, i) => (
                <button
                  key={f}
                  className={`whitespace-nowrap rounded-full px-3.5 py-1.5 text-xs font-medium ${
                    i === 0 ? "bg-white text-black" : "text-white/60"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <StatCard icon={<Eye className="h-4 w-4 text-cyan-400" />} iconBg="bg-cyan-400/20" value="1.1K" label="Total Views" />
              <StatCard icon={<Heart className="h-4 w-4 text-pink-400" />} iconBg="bg-pink-400/20" value="5" label="Total Likes" />
              <StatCard icon={<Users className="h-4 w-4 text-emerald-400" />} iconBg="bg-emerald-400/20" value="0" label="Subscribers" />
              <StatCard icon={<TrendingUp className="h-4 w-4 text-yellow-600" />} iconBg="bg-yellow-600/20" value="0.5%" label="Engagement %" />
            </div>
            <div className="mt-4 rounded-xl bg-white/5 p-4">
              <h3 className="font-bold">Monthly Performance</h3>
              <div className="mt-4 flex items-end justify-between gap-2 h-32">
                {[
                  { month: "Nov", views: 2, eng: 4 },
                  { month: "Dec", views: 3, eng: 4 },
                  { month: "Jan", views: 3, eng: 4 },
                  { month: "Feb", views: 15, eng: 2 },
                  { month: "Mar", views: 8, eng: 3 },
                  { month: "Apr", views: 100, eng: 2 },
                ].map((d, i) => (
                  <div key={i} className="flex flex-col items-center gap-1 flex-1">
                    <div className="flex gap-0.5 items-end h-24 w-full justify-center">
                      <div className="w-2 rounded-sm bg-blue-500" style={{ height: `${Math.max(d.views, 3)}%` }} />
                      <div className="w-2 rounded-sm border-t-2 border-dashed border-pink-400" style={{ height: "2px" }} />
                    </div>
                    <span className="text-[10px] text-white/40">{d.month}</span>
                  </div>
                ))}
              </div>
              <div className="mt-2 flex items-center gap-4 text-[10px] text-white/50">
                <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-blue-500" />Views</span>
                <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-pink-400" />Engagement</span>
              </div>
            </div>
          </div>
        )}

        {/* PROFILE */}
        {activeTab === "profile" && (
          <div>
            {/* Banner */}
            <div className="mt-4 relative">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80"
                alt="Banner"
                className="h-44 w-full rounded-t-xl object-cover"
              />
              <button className="absolute bottom-3 right-3 rounded-full bg-black/60 px-3 py-1.5 text-xs">
                Change Banner
              </button>
            </div>
            <button className="text-xs text-white/50 mt-1">Remove banner</button>

            <div className="mt-2 flex flex-col items-center">
              <img src="https://i.pravatar.cc/150?img=15" alt="Profile" className="h-16 w-16 rounded-full object-cover" />
              <button className="mt-1 text-xs text-pink-400">Change Photo</button>
            </div>

            <div className="mt-4 rounded-xl bg-white/5 p-4 flex flex-col gap-4">
              <div>
                <div className="flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2.5 text-sm text-white/40">
                  <span>🔒</span> Email <span className="ml-1 text-white/70">russellbcox@hotmail.com</span>
                </div>
              </div>
              <div>
                <label className="text-xs text-pink-400">Page Name</label>
                <input className="mt-1 w-full rounded-lg bg-white/10 px-3 py-2.5 text-sm" defaultValue="Estelle Bliah" />
              </div>
              <div>
                <label className="text-xs text-pink-400">Full Name</label>
                <input className="mt-1 w-full rounded-lg bg-white/10 px-3 py-2.5 text-sm" defaultValue="Estelle Bliah" />
              </div>
              <div>
                <label className="text-xs text-pink-400">Username</label>
                <div className="mt-1 flex rounded-lg bg-white/10">
                  <span className="px-3 py-2.5 text-sm text-white/40">@</span>
                  <input className="flex-1 bg-transparent py-2.5 pr-3 text-sm" defaultValue="estellebliah" />
                </div>
              </div>
              <div>
                <label className="text-xs text-pink-400">Bio</label>
                <textarea className="mt-1 w-full rounded-lg bg-white/10 px-3 py-2.5 text-sm h-24 resize-none" defaultValue={"Shake With Estelle\nLove to dance/Teacher-Choreographer"} />
              </div>
              <div>
                <label className="text-xs text-pink-400">Website</label>
                <input className="mt-1 w-full rounded-lg bg-white/10 px-3 py-2.5 text-sm" defaultValue="https://instagram.com/estellebliah" />
              </div>
              <div>
                <label className="text-xs text-pink-400">Currency</label>
                <input className="mt-1 w-full rounded-lg bg-white/10 px-3 py-2.5 text-sm text-white/40" defaultValue="GBP" readOnly />
                <p className="mt-1 text-[10px] text-white/40">Contact support to change currency</p>
              </div>
            </div>

            <div className="mt-4 rounded-xl bg-white/5 p-4">
              <h3 className="font-bold mb-3">Page Settings</h3>
              <SettingToggle label="Page Visibility" desc="Your page is publicly visible" defaultOn />
              <SettingToggle label="Show Subscriber Count" desc="Display your subscriber count on your profile" defaultOn />
            </div>

            <div className="mt-4 rounded-xl bg-white/5 p-4">
              <h3 className="font-bold mb-3">Notifications</h3>
              <SettingToggle label="Email Notifications" defaultOn />
              <SettingToggle label="Push Notifications" defaultOn />
              <SettingToggle label="Marketing Emails" defaultOn={false} />
            </div>

            <div className="mt-4 rounded-xl bg-white/5 p-4">
              <h3 className="font-bold mb-3">Email Alerts</h3>
              <SettingToggle label="New posts" defaultOn />
              <SettingToggle label="Comments" defaultOn />
              <SettingToggle label="Direct messages" defaultOn />
              <SettingToggle label="New members" defaultOn />
            </div>

            <button className="mt-4 w-full rounded-xl bg-pink-500 py-3.5 text-center font-bold mb-4">
              Save Changes
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const StatCard = ({ icon, iconBg, value, label }: { icon: React.ReactNode; iconBg: string; value: string; label: string }) => (
  <div className="rounded-xl bg-white/5 p-4">
    <div className={`inline-flex h-8 w-8 items-center justify-center rounded-lg ${iconBg}`}>
      {icon}
    </div>
    <p className="mt-2 text-xl font-bold">{value}</p>
    <p className="text-xs text-white/50">{label}</p>
  </div>
);

const VideoRow = ({ video }: { video: { title: string; thumb: string; views: number; likes: number } }) => (
  <div className="flex items-center gap-3 rounded-xl bg-white/5 p-3">
    <img src={video.thumb} alt={video.title} className="h-14 w-18 rounded-lg object-cover" />
    <div className="flex-1 min-w-0">
      <p className="font-medium text-sm">{video.title}</p>
      <span className="inline-block mt-0.5 rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-medium text-emerald-400">Published</span>
      <div className="mt-0.5 flex items-center gap-3 text-xs text-white/50">
        <span className="flex items-center gap-1"><Eye className="h-3 w-3" />{video.views}</span>
        <span className="flex items-center gap-1"><Heart className="h-3 w-3" />{video.likes}</span>
      </div>
    </div>
    <button className="rounded-lg bg-white/10 p-1.5"><Trash2 className="h-3.5 w-3.5 text-white/50" /></button>
  </div>
);

const SettingToggle = ({ label, desc, defaultOn = true }: { label: string; desc?: string; defaultOn?: boolean }) => {
  const [on, setOn] = useState(defaultOn);
  return (
    <div className="flex items-center justify-between py-2.5 border-b border-white/5 last:border-0">
      <div>
        <p className="text-sm font-medium">{label}</p>
        {desc && <p className="text-[11px] text-white/40">{desc}</p>}
      </div>
      <button
        onClick={() => setOn(!on)}
        className={`relative h-6 w-11 rounded-full transition-colors ${on ? "bg-pink-500" : "bg-white/20"}`}
      >
        <span className={`absolute top-0.5 h-5 w-5 rounded-full bg-white transition-transform ${on ? "left-[22px]" : "left-0.5"}`} />
      </button>
    </div>
  );
};

export default Studio;
