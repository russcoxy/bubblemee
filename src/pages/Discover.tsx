import { useState } from "react";
import { ChevronRight, Music } from "lucide-react";
import BottomNav from "@/components/BottomNav";
import AppHeader from "@/components/AppHeader";

/* ─── mock data ─── */
const topDances = [
  { title: "Kiss More", creator: "@estellebliah", views: 36, thumb: "https://images.unsplash.com/photo-1547153760-18fc86ef706d?w=200&q=80" },
  { title: "Cupid", creator: "@estellebliah", views: 26, thumb: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=200&q=80" },
  { title: "Laxed (Siren Beat)", creator: "@estellebliah", views: 20, thumb: "https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=200&q=80" },
  { title: "Say So", creator: "@estellebliah", views: 19, thumb: "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=200&q=80" },
  { title: "Corvette", creator: "@estellebliah", views: 11, thumb: "https://images.unsplash.com/photo-1550026593-f369f4955b88?w=200&q=80" },
  { title: "Blinding Lights", creator: "@estellebliah", views: 7, thumb: "https://images.unsplash.com/photo-1535525153412-5a42439a210d?w=200&q=80" },
  { title: "Out West", creator: "@estellebliah", views: 4, thumb: "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=200&q=80" },
];

const topDancers = [
  { name: "Justin Neto", img: "https://i.pravatar.cc/100?img=11" },
  { name: "Shuffle Mamas", img: "https://i.pravatar.cc/100?img=12" },
  { name: "George Beet", img: "https://i.pravatar.cc/100?img=13" },
  { name: "Jordan Grace", img: "https://i.pravatar.cc/100?img=14" },
  { name: "Estelle Bliah", img: "https://i.pravatar.cc/100?img=15" },
];

type TimeFilter = "week" | "month" | "all";

const Discover = () => {
  const [timeFilter, setTimeFilter] = useState<TimeFilter>("week");

  return (
    <div className="min-h-screen bg-background pb-20 md:mx-auto md:w-[60%]">
      <AppHeader />

      <main className="px-4">
        {/* ─── Top 10 Dances ─── */}
        <div className="mt-4 rounded-2xl border border-border bg-card p-4">
          <div className="mb-3 flex items-center gap-2">
            <Music className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-extrabold">Top 10 Dances</h2>
          </div>

          {/* Time filter tabs */}
          <div className="mb-4 flex gap-2">
            {([
              { key: "week" as TimeFilter, label: "This Week" },
              { key: "month" as TimeFilter, label: "This Month" },
              { key: "all" as TimeFilter, label: "All Time" },
            ]).map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setTimeFilter(key)}
                className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-colors ${
                  timeFilter === key
                    ? "bg-primary text-primary-foreground"
                    : "border border-border bg-background text-foreground"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Dance list */}
          <div className="divide-y divide-border">
            {topDances.map((dance, i) => {
              const rank = i + 1;
              const isTop3 = rank <= 3;
              const isOdd = rank % 2 === 1;
              return (
                <div key={dance.title} className="flex items-center gap-3 py-3">
                  {/* Rank bar + number */}
                  <div className="flex w-8 items-center gap-1">
                    <div
                      className={`h-10 w-1 rounded-full ${
                        isOdd ? "bg-yellow-400" : "bg-muted-foreground/30"
                      }`}
                    />
                    <span
                      className={`text-lg font-bold ${
                        isTop3 ? "text-primary" : "text-muted-foreground"
                      }`}
                    >
                      {rank}
                    </span>
                  </div>

                  {/* Thumbnail */}
                  <img
                    src={dance.thumb}
                    alt={dance.title}
                    className="h-14 w-14 rounded-lg object-cover"
                  />

                  {/* Info */}
                  <div className="flex-1">
                    <p className="font-bold">{dance.title}</p>
                    <p className="text-sm text-muted-foreground">{dance.creator}</p>
                  </div>

                  {/* Views */}
                  <span className="text-sm font-medium text-muted-foreground">{dance.views}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* ─── Top Dancers ─── */}
        <div className="mt-6 mb-4">
          <div className="mb-3 flex items-center gap-2">
            <span className="text-2xl">🏆</span>
            <h2 className="text-xl font-extrabold">Top Dancers</h2>
          </div>

          <div className="divide-y divide-border">
            {topDancers.map((dancer, i) => (
              <div key={dancer.name} className="flex items-center gap-4 py-4">
                <span
                  className={`w-6 text-center text-lg font-bold ${
                    i < 3 ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {i + 1}
                </span>

                <img
                  src={dancer.img}
                  alt={dancer.name}
                  className="h-14 w-14 rounded-full object-cover"
                />

                <span className="flex-1 font-bold">{dancer.name}</span>

                <button className="flex items-center gap-1 text-sm text-muted-foreground">
                  View Profile
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default Discover;
