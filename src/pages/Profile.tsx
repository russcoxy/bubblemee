import { useState } from "react";
import { Plus, MoreHorizontal, Play, Eye, Grid2X2, Lock, Gift, ShoppingBag } from "lucide-react";
import BottomNav from "@/components/BottomNav";
import AppHeader from "@/components/AppHeader";

type ProfileTab = "feed" | "posts" | "shop";

const feedVideos = [
  { thumb: "https://images.unsplash.com/photo-1547153760-18fc86ef706d?w=400&q=80", views: 480, featured: true },
  { thumb: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=400&q=80", views: 119 },
  { thumb: "https://images.unsplash.com/photo-1535525153412-5a42439a210d?w=400&q=80", views: 92 },
  { thumb: "https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=400&q=80", views: 182 },
  { thumb: "https://images.unsplash.com/photo-1550026593-f369f4955b88?w=400&q=80", views: 67 },
  { thumb: "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=400&q=80", views: 58 },
];

const shopItems = [
  { title: "Dance Is My Favorite Season Sweatshirt", price: "£30.00", thumb: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&q=80" },
  { title: "This Is My Dance Hangover Hoodie", price: "£25.00", thumb: "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=400&q=80" },
  { title: "Ulrike Stylish Winter Hoodie", price: "£28.00", thumb: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&q=80" },
];

const Profile = () => {
  const [activeTab, setActiveTab] = useState<ProfileTab>("feed");

  return (
    <div className="min-h-screen bg-background pb-20">
      <AppHeader />

      <div className="mx-auto md:w-[60%]">
        {/* Top actions */}
        <div className="flex justify-end gap-2 px-4 pt-2">
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
            <Plus className="h-5 w-5" />
          </button>
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
            <MoreHorizontal className="h-5 w-5" />
          </button>
        </div>

        {/* Profile header */}
        <div className="flex items-start gap-4 px-4 pt-2">
          <img
            src="https://i.pravatar.cc/150?img=15"
            alt="Profile"
            className="h-28 w-28 rounded-full object-cover"
          />
          <div className="flex-1 pt-2">
            <h1 className="text-2xl font-extrabold">Estelle Bliah</h1>
            <div className="mt-1 flex items-center gap-4">
              <div>
                <span className="text-lg font-bold text-cyan-500">4</span>
                <p className="text-xs text-muted-foreground">Followers</p>
              </div>
              <div>
                <span className="text-lg font-bold text-cyan-500">2</span>
                <p className="text-xs text-muted-foreground">Following</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bio */}
        <div className="mt-3 px-4">
          <p className="font-bold text-sm">Estelle Bliah</p>
          <p className="text-sm text-muted-foreground">Shake With Estelle</p>
          <p className="text-sm text-muted-foreground">Love to dance/Teacher-Choreographer</p>
          <a href="#" className="text-sm text-cyan-500">https://instagram.com/estellebliah</a>
        </div>

        {/* Subscribe / Gift buttons */}
        <div className="mt-4 flex gap-3 px-4">
          <button className="flex flex-1 items-center justify-center gap-2 rounded-full bg-foreground py-3 text-sm font-bold text-background">
            <Lock className="h-4 w-4" />
            Subscribe · £5/mo
          </button>
          <button className="flex flex-1 items-center justify-center gap-2 rounded-full border border-border py-3 text-sm font-bold">
            <Gift className="h-4 w-4" />
            Gift Membership
          </button>
        </div>

        {/* Tabs */}
        <div className="mt-5 flex border-b border-border">
          {([
            { key: "feed" as ProfileTab, label: "Feed", icon: <Play className="h-4 w-4" /> },
            { key: "posts" as ProfileTab, label: "Posts", icon: <Grid2X2 className="h-4 w-4" /> },
            { key: "shop" as ProfileTab, label: "Shop", icon: <ShoppingBag className="h-4 w-4" /> },
          ]).map(({ key, label, icon }) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`flex flex-1 flex-col items-center gap-1 py-3 text-xs font-bold transition-colors ${
                activeTab === key
                  ? "text-foreground border-b-[3px]"
                  : "text-muted-foreground"
              }`}
              style={activeTab === key ? { borderColor: "hsl(347 70% 55%)" } : {}}
            >
              <span style={activeTab === key ? { color: "hsl(347 70% 55%)" } : {}}>{icon}</span>
              <span>{label}</span>
            </button>
          ))}
        </div>

        {/* Tab content */}
        {activeTab === "feed" && (
          <div className="grid grid-cols-2 gap-0.5 md:grid-cols-3">
            {feedVideos.map((video, i) => (
              <div key={i} className="relative overflow-hidden">
                <div className="aspect-[3/4] w-full">
                  <img src={video.thumb} alt="" className="h-full w-full object-cover" />
                </div>
                {video.featured && (
                  <div className="absolute left-2 top-2 rounded bg-foreground/70 px-2 py-0.5 text-[10px] font-bold uppercase text-white">
                    Featured
                  </div>
                )}
                <div className="absolute bottom-2 left-2 flex items-center gap-1 text-xs font-medium text-white drop-shadow">
                  <Eye className="h-3.5 w-3.5" />
                  {video.views}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "posts" && (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <Grid2X2 className="h-12 w-12 text-muted-foreground/30" />
            <h3 className="mt-4 text-lg font-bold">No posts yet</h3>
            <p className="mt-1 text-sm text-muted-foreground">Posts will appear here</p>
          </div>
        )}

        {activeTab === "shop" && (
          <div className="px-4 pt-4">
            <div className="flex justify-end mb-3">
              <ShoppingBag className="h-5 w-5 text-muted-foreground" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              {shopItems.map((item, i) => (
                <div key={i} className="flex flex-col">
                  <img src={item.thumb} alt={item.title} className="aspect-square w-full rounded-lg object-cover" />
                  <p className="mt-2 text-sm font-bold">{item.title}</p>
                  <p className="text-sm font-bold text-primary">{item.price}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <BottomNav />
    </div>
  );
};

export default Profile;
