import { Search, Bell, Send, Play, Eye } from "lucide-react";
import BottomNav from "@/components/BottomNav";
import logoText from "@/assets/logo-text.jpeg";

/* ─── mock data ─── */
const dancers = [
  { name: "Justin Neto", img: "https://i.pravatar.cc/100?img=11" },
  { name: "Shuffle Ma…", img: "https://i.pravatar.cc/100?img=12" },
  { name: "George Beet", img: "https://i.pravatar.cc/100?img=13" },
  { name: "Jordan Grace", img: "https://i.pravatar.cc/100?img=14" },
  { name: "Estelle Bliah", img: "https://i.pravatar.cc/100?img=15" },
  { name: "Alex Rose", img: "https://i.pravatar.cc/100?img=16" },
];

const trendingVideos: Video[] = [
  { title: "Kiss More", creator: "@estellebliah", views: 182, thumb: "https://images.unsplash.com/photo-1547153760-18fc86ef706d?w=800&q=80", avatar: "https://i.pravatar.cc/40?img=15" },
  { title: "Laxed (Siren Beat)", creator: "@estellebliah", views: 115, thumb: "https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=800&q=80", avatar: "https://i.pravatar.cc/40?img=12" },
  { title: "Cupid", creator: "@estellebliah", views: 119, thumb: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=800&q=80", avatar: "https://i.pravatar.cc/40?img=13" },
  { title: "Say So", creator: "@estellebliah", views: 480, thumb: "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=800&q=80", avatar: "https://i.pravatar.cc/40?img=14" },
];

interface Video {
  title: string;
  creator: string;
  views: number;
  thumb: string;
  avatar: string;
}

const makeVideos = (section: string): Video[] => [
  { title: "Kiss More", creator: "@estellebliah", views: 182, thumb: "https://images.unsplash.com/photo-1547153760-18fc86ef706d?w=400&q=80", avatar: "https://i.pravatar.cc/40?img=15" },
  { title: "Laxed (Siren Beat)", creator: "@estellebliah", views: 115, thumb: "https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=400&q=80", avatar: "https://i.pravatar.cc/40?img=15" },
  { title: "Cupid", creator: "@estellebliah", views: 119, thumb: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=400&q=80", avatar: "https://i.pravatar.cc/40?img=15" },
  { title: "Blinding Lights", creator: "@estellebliah", views: 92, thumb: "https://images.unsplash.com/photo-1535525153412-5a42439a210d?w=400&q=80", avatar: "https://i.pravatar.cc/40?img=15" },
  { title: "Say So", creator: "@estellebliah", views: 480, thumb: "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=400&q=80", avatar: "https://i.pravatar.cc/40?img=15" },
  { title: "Out West", creator: "@estellebliah", views: 67, thumb: "https://images.unsplash.com/photo-1550026593-f369f4955b88?w=400&q=80", avatar: "https://i.pravatar.cc/40?img=15" },
];

const newDrops = makeVideos("new");
const popular = makeVideos("popular");

/* ─── components ─── */

const VideoCard = ({ video }: { video: Video }) => (
  <div className="flex flex-col">
    <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-muted">
      <img src={video.thumb} alt={video.title} className="h-full w-full object-cover" loading="lazy" />
      {/* play button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black/40">
          <Play className="h-5 w-5 fill-white text-white" />
        </div>
      </div>
      {/* bottom overlay */}
      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-3 py-2">
        <div className="flex items-center gap-1.5">
          <img src={video.avatar} alt="" className="h-6 w-6 rounded-full border border-white/60" />
          <span className="text-xs font-medium text-white drop-shadow">{video.creator}</span>
        </div>
        <div className="flex items-center gap-1 text-xs text-white drop-shadow">
          <Eye className="h-3.5 w-3.5" />
          {video.views}
        </div>
      </div>
    </div>
    <p className="mt-1.5 truncate text-sm md:text-xs font-bold">{video.title}</p>
  </div>
);

const SectionHeader = ({ title, subtitle, count }: { title: string; subtitle: string; count: number }) => (
  <div className="mb-3 flex items-end justify-between">
    <div>
      <h2 className="text-xl font-extrabold">{title}</h2>
      <p className="text-xs text-muted-foreground">{subtitle} • {count} videos</p>
    </div>
    <div className="flex items-center gap-2">
      {/* grid / list toggles */}
      <button className="flex h-8 w-8 items-center justify-center rounded-lg border border-border">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><rect width="6" height="6" rx="1" fill="currentColor" /><rect x="8" width="6" height="6" rx="1" fill="currentColor" /><rect y="8" width="6" height="6" rx="1" fill="currentColor" /><rect x="8" y="8" width="6" height="6" rx="1" fill="currentColor" /></svg>
      </button>
      <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><rect width="14" height="2" rx="1" fill="currentColor" /><rect y="6" width="14" height="2" rx="1" fill="currentColor" /><rect y="12" width="14" height="2" rx="1" fill="currentColor" /></svg>
      </button>
      <button className="text-sm font-semibold text-primary">Show more &gt;</button>
    </div>
  </div>
);

const Home = () => {
  return (
    <div className="min-h-screen bg-background pb-20">
      {/* ─── Header ─── */}
      <header className="sticky top-0 z-40 bg-background px-4 pt-3 pb-2">
        <div className="flex items-center justify-between">
          <img src="https://i.pravatar.cc/40?img=5" alt="avatar" className="h-9 w-9 rounded-full" />
          <img src={logoText} alt="BubbleMee" className="h-7" />
          <div className="flex items-center gap-3">
            <button aria-label="Notifications"><Bell className="h-6 w-6 text-foreground" /></button>
            <button aria-label="Share"><Send className="h-6 w-6 text-foreground" /></button>
          </div>
        </div>

        {/* Search */}
        <div className="mt-3 flex items-center gap-2 rounded-xl bg-muted px-4 py-2.5">
          <Search className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">Search dancers, users, hashtags…</span>
        </div>
      </header>

      <main className="px-4">
        {/* ─── Dancers row ─── */}
        <h2 className="mb-3 mt-2 text-xl font-extrabold">Dancers</h2>
        <div className="mb-5 flex gap-4 md:gap-8 overflow-x-auto pb-1 scrollbar-none">
          {dancers.map((d) => (
            <div key={d.name} className="flex w-16 md:w-24 shrink-0 flex-col items-center gap-1">
              <div className="h-16 w-16 md:h-24 md:w-24 overflow-hidden rounded-full border-2 border-primary/30">
                <img src={d.img} alt={d.name} className="h-full w-full object-cover" />
              </div>
              <span className="w-full truncate text-center text-[11px]">{d.name}</span>
            </div>
          ))}
        </div>

        {/* ─── Trending ─── */}
        <h2 className="mb-3 text-xl font-extrabold">Trending</h2>
        <div className="mb-6 grid grid-cols-2 gap-3 md:grid-cols-4">
          {trendingVideos.map((video, i) => (
            <div key={i} className="flex flex-col">
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-muted">
                <div className="absolute left-3 top-3 z-10 rounded-full bg-foreground/70 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                  Trending
                </div>
                <img src={video.thumb} alt={video.title} className="h-full w-full object-cover" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black/40">
                    <Play className="h-5 w-5 fill-white text-white" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-3 py-2">
                  <div className="flex items-center gap-1.5">
                    <img src={video.avatar} alt="" className="h-6 w-6 rounded-full border border-white/60" />
                    <span className="text-xs font-medium text-white drop-shadow">{video.creator}</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-white drop-shadow">
                    <Eye className="h-3.5 w-3.5" />
                    {video.views}
                  </div>
                </div>
              </div>
              <p className="mt-1.5 truncate text-sm md:text-xs font-bold">{video.title}</p>
            </div>
          ))}
        </div>

        {/* ─── New Drops ─── */}
        <SectionHeader title="New Drops" subtitle="Dance videos" count={newDrops.length} />
        <div className="mb-8 grid grid-cols-2 gap-3 md:grid-cols-6">
          {newDrops.map((v, i) => (
            <VideoCard key={`new-${i}`} video={v} />
          ))}
        </div>

        {/* ─── Popular ─── */}
        <SectionHeader title="Popular" subtitle="Trending dance" count={popular.length} />
        <div className="mb-8 grid grid-cols-2 gap-3 md:grid-cols-6">
          {popular.map((v, i) => (
            <VideoCard key={`pop-${i}`} video={v} />
          ))}
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default Home;
