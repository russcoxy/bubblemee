import { useParams, useNavigate } from "react-router-dom";
import { ChevronLeft, Play, Eye, Lock, Gift, Grid2X2, ShoppingBag } from "lucide-react";
import { useState } from "react";
import BottomNav from "@/components/BottomNav";

const creatorsData: Record<string, { name: string; username: string; avatar: string; followers: number; following: number; bio: string; website: string; videos: { thumb: string; views: number; featured?: boolean }[]; shop: { title: string; price: string; thumb: string }[] }> = {
  "justin-neto": {
    name: "Justin Neto", username: "justinneto", avatar: "https://i.pravatar.cc/150?img=11",
    followers: 12, following: 5, bio: "Freestyle dancer | LA based", website: "https://instagram.com/justinneto",
    videos: [
      { thumb: "https://images.unsplash.com/photo-1547153760-18fc86ef706d?w=400&q=80", views: 320, featured: true },
      { thumb: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=400&q=80", views: 180 },
      { thumb: "https://images.unsplash.com/photo-1535525153412-5a42439a210d?w=400&q=80", views: 95 },
    ],
    shop: [],
  },
  "shuffle-ma": {
    name: "Shuffle Ma", username: "shufflema", avatar: "https://i.pravatar.cc/150?img=12",
    followers: 8, following: 3, bio: "Shuffle dancer", website: "",
    videos: [
      { thumb: "https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=400&q=80", views: 210 },
      { thumb: "https://images.unsplash.com/photo-1550026593-f369f4955b88?w=400&q=80", views: 140 },
    ],
    shop: [],
  },
  "george-beet": {
    name: "George Beet", username: "georgebeet", avatar: "https://i.pravatar.cc/150?img=13",
    followers: 22, following: 10, bio: "Dance choreographer", website: "",
    videos: [
      { thumb: "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=400&q=80", views: 450 },
      { thumb: "https://images.unsplash.com/photo-1547153760-18fc86ef706d?w=400&q=80", views: 280 },
    ],
    shop: [],
  },
  "jordan-grace": {
    name: "Jordan Grace", username: "jordangrace", avatar: "https://i.pravatar.cc/150?img=14",
    followers: 6, following: 8, bio: "Contemporary dancer", website: "",
    videos: [
      { thumb: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=400&q=80", views: 75 },
    ],
    shop: [],
  },
  "estelle-bliah": {
    name: "Estelle Bliah", username: "estellebliah", avatar: "https://i.pravatar.cc/150?img=15",
    followers: 4, following: 2, bio: "Shake With Estelle\nLove to dance/Teacher-Choreographer", website: "https://instagram.com/estellebliah",
    videos: [
      { thumb: "https://images.unsplash.com/photo-1547153760-18fc86ef706d?w=400&q=80", views: 480, featured: true },
      { thumb: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=400&q=80", views: 119 },
      { thumb: "https://images.unsplash.com/photo-1535525153412-5a42439a210d?w=400&q=80", views: 92 },
      { thumb: "https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=400&q=80", views: 182 },
    ],
    shop: [
      { title: "Dance Is My Favorite Season Sweatshirt", price: "£30.00", thumb: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&q=80" },
      { title: "This Is My Dance Hangover Hoodie", price: "£25.00", thumb: "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=400&q=80" },
    ],
  },
  "alex-rose": {
    name: "Alex Rose", username: "alexrose", avatar: "https://i.pravatar.cc/150?img=16",
    followers: 15, following: 7, bio: "Hip hop & street dance", website: "",
    videos: [
      { thumb: "https://images.unsplash.com/photo-1550026593-f369f4955b88?w=400&q=80", views: 200 },
      { thumb: "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=400&q=80", views: 130 },
    ],
    shop: [],
  },
};

type Tab = "feed" | "posts" | "shop";

const CreatorProfile = () => {
  const { username } = useParams();
  const navigate = useNavigate();
  const creator = creatorsData[username || ""] || creatorsData["estelle-bliah"];
  const [activeTab, setActiveTab] = useState<Tab>("feed");

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-background px-4 pt-3 pb-2">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate(-1)}>
            <ChevronLeft className="h-6 w-6" />
          </button>
          <span className="font-bold text-lg">@{creator.username}</span>
        </div>
      </div>

      <div className="mx-auto md:w-[60%]">
        {/* Profile header */}
        <div className="flex items-start gap-4 px-4 pt-2">
          <img src={creator.avatar} alt={creator.name} className="h-28 w-28 rounded-full object-cover" />
          <div className="flex-1 pt-2">
            <h1 className="text-2xl font-extrabold">{creator.name}</h1>
            <div className="mt-1 flex items-center gap-4">
              <div>
                <span className="text-lg font-bold text-cyan-500">{creator.followers}</span>
                <p className="text-xs text-muted-foreground">Followers</p>
              </div>
              <div>
                <span className="text-lg font-bold text-cyan-500">{creator.following}</span>
                <p className="text-xs text-muted-foreground">Following</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bio */}
        <div className="mt-3 px-4">
          <p className="font-bold text-sm">{creator.name}</p>
          {creator.bio.split("\n").map((line, i) => (
            <p key={i} className="text-sm text-muted-foreground">{line}</p>
          ))}
          {creator.website && <a href={creator.website} className="text-sm text-cyan-500">{creator.website}</a>}
        </div>

        {/* Subscribe / Gift */}
        <div className="mt-4 flex gap-3 px-4">
          <button className="flex flex-1 items-center justify-center gap-2 rounded-full bg-foreground py-3 text-sm font-bold text-background">
            <Lock className="h-4 w-4" />Subscribe · £5/mo
          </button>
          <button className="flex flex-1 items-center justify-center gap-2 rounded-full border border-border py-3 text-sm font-bold">
            <Gift className="h-4 w-4" />Gift Membership
          </button>
        </div>

        {/* Tabs */}
        <div className="mt-5 flex border-b border-border">
          {([
            { key: "feed" as Tab, label: "Feed", icon: <Play className="h-4 w-4" /> },
            { key: "posts" as Tab, label: "Posts", icon: <Grid2X2 className="h-4 w-4" /> },
            { key: "shop" as Tab, label: "Shop", icon: <ShoppingBag className="h-4 w-4" /> },
          ]).map(({ key, label, icon }) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`flex flex-1 flex-col items-center gap-1 py-3 text-xs font-bold transition-colors ${
                activeTab === key ? "text-foreground border-b-[3px]" : "text-muted-foreground"
              }`}
              style={activeTab === key ? { borderColor: "hsl(347 70% 55%)" } : {}}
            >
              <span style={activeTab === key ? { color: "hsl(347 70% 55%)" } : {}}>{icon}</span>
              <span>{label}</span>
            </button>
          ))}
        </div>

        {/* Feed */}
        {activeTab === "feed" && (
          <div className="grid grid-cols-2 gap-0.5 md:grid-cols-3">
            {creator.videos.map((video, i) => (
              <div key={i} className="relative overflow-hidden">
                <div className="aspect-[3/4] w-full">
                  <img src={video.thumb} alt="" className="h-full w-full object-cover" />
                </div>
                {video.featured && (
                  <div className="absolute left-2 top-2 rounded bg-foreground/70 px-2 py-0.5 text-[10px] font-bold uppercase text-white">Featured</div>
                )}
                <div className="absolute bottom-2 left-2 flex items-center gap-1 text-xs font-medium text-white drop-shadow">
                  <Eye className="h-3.5 w-3.5" />{video.views}
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

        {activeTab === "shop" && creator.shop.length > 0 && (
          <div className="px-4 pt-4">
            <div className="grid grid-cols-2 gap-3">
              {creator.shop.map((item, i) => (
                <div key={i} className="flex flex-col">
                  <img src={item.thumb} alt={item.title} className="aspect-square w-full rounded-lg object-cover" />
                  <p className="mt-2 text-sm font-bold">{item.title}</p>
                  <p className="text-sm font-bold text-primary">{item.price}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "shop" && creator.shop.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <ShoppingBag className="h-12 w-12 text-muted-foreground/30" />
            <h3 className="mt-4 text-lg font-bold">No shop items</h3>
            <p className="mt-1 text-sm text-muted-foreground">Products will appear here</p>
          </div>
        )}
      </div>

      <BottomNav />
    </div>
  );
};

export default CreatorProfile;
