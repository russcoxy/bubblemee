import { useState } from "react";
import { TrendingUp, Play, Music, Trophy, Search, Plus, ArrowRightFromLine, ChevronLeft } from "lucide-react";
import BottomNav from "@/components/BottomNav";
import AppHeader from "@/components/AppHeader";

type Tab = "global" | "private";
type TimeFilter = "week" | "month" | "all";
type PrivateView = "list" | "join" | "create";

const globalEntries = [
  { rank: 1, name: "Russ Cox", handle: "@russcoxy", song: "Say So", pts: 81, thumb: "https://images.unsplash.com/photo-1547153760-18fc86ef706d?w=200&q=80", avatar: "https://i.pravatar.cc/40?img=33" },
  { rank: 2, name: "Kieron Clark", handle: "@kieronclark", song: "Cupid", pts: 77, thumb: "https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=200&q=80", avatar: "" },
];

const Leaderboard = () => {
  const [tab, setTab] = useState<Tab>("global");
  const [timeFilter, setTimeFilter] = useState<TimeFilter>("week");
  const [privateView, setPrivateView] = useState<PrivateView>("list");
  const [inviteCode, setInviteCode] = useState("");

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* ─── Sub-pages: Join ─── */}
      {tab === "private" && privateView === "join" && (
        <>
          <AppHeader />
          <div className="mx-auto md:w-[60%]">
            <div className="flex items-center gap-3 px-4 pt-4 pb-3">
              <button onClick={() => setPrivateView("list")} className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <h1 className="flex-1 text-center text-lg font-bold">Join Leaderboard</h1>
              <div className="w-10" />
            </div>
            <div className="border-t border-border px-6 pt-6">
              <p className="text-muted-foreground">Enter the 8-character invite code your friend shared with you.</p>
              <label className="mt-6 block text-xs font-bold uppercase tracking-wider text-muted-foreground">Invite Code</label>
              <input
                value={inviteCode}
                onChange={(e) => setInviteCode(e.target.value.toUpperCase())}
                maxLength={8}
                placeholder="ABC12345"
                className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-4 text-center text-2xl font-bold tracking-[0.3em] text-muted-foreground placeholder:text-muted-foreground/40"
              />
              <button
                disabled={inviteCode.length < 8}
                className="mt-6 w-full rounded-xl bg-muted py-4 text-center font-bold text-muted-foreground disabled:opacity-60"
              >
                Join Leaderboard
              </button>
            </div>
          </div>
          <BottomNav />
        </>
      )}

      {/* ─── Sub-pages: Create ─── */}
      {tab === "private" && privateView === "create" && (
        <>
          <AppHeader />
          <div className="mx-auto md:w-[60%]">
            <div className="flex items-center gap-3 px-4 pt-4 pb-3">
              <button onClick={() => setPrivateView("list")} className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <h1 className="flex-1 text-center text-lg font-bold">Create Leaderboard</h1>
              <div className="w-10" />
            </div>
            <div className="border-t border-border">
              <div className="flex justify-center gap-2 py-4">
                <span className="rounded-full bg-primary px-4 py-1 text-xs font-bold text-primary-foreground">1 of 2</span>
                <span className="rounded-full bg-muted px-4 py-1 text-xs font-bold text-muted-foreground">2 of 2</span>
              </div>
              <div className="px-6">
                <h2 className="text-2xl font-extrabold">Pick a dance</h2>
                <p className="mt-1 text-sm text-muted-foreground">Search for the creator dance to compete on.</p>
                <div className="mt-4 flex items-center gap-2 rounded-xl border border-border bg-background px-4 py-3">
                  <Search className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Search dances…</span>
                </div>
                <div className="mt-16 flex flex-col items-center text-muted-foreground/40">
                  <Search className="h-12 w-12" />
                  <p className="mt-3 text-sm text-muted-foreground">Type a dance name to get started</p>
                </div>
              </div>
            </div>
          </div>
          <BottomNav />
        </>
      )}

      {/* ─── Main Leaderboard ─── */}
      {(tab === "global" || (tab === "private" && privateView === "list")) && (
        <>
          <AppHeader />
          <div className="mx-auto px-4 pt-4 pb-2 md:w-[60%]">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-6 w-6 text-primary" />
              <h1 className="text-3xl font-extrabold">Leaderboard</h1>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">Who's got the highest score?</p>

            <div className="mt-4 flex rounded-full bg-muted p-1">
              {(["global", "private"] as Tab[]).map((t) => (
                <button
                  key={t}
                  onClick={() => { setTab(t); setPrivateView("list"); }}
                  className={`flex-1 rounded-full py-2 text-sm font-bold capitalize transition-colors ${
                    tab === t ? "bg-foreground text-background" : "text-muted-foreground"
                  }`}
                >
                  {t === "global" ? "Global" : "Private"}
                </button>
              ))}
            </div>
          </div>

          <main className="mx-auto px-4 md:w-[60%]">
            {tab === "global" && (
              <>
                <div className="mt-3 flex gap-2">
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
                          : "border border-border bg-background text-muted-foreground"
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>

                <div className="mt-4 space-y-3">
                  {globalEntries.map((entry) => {
                    const isOdd = entry.rank % 2 === 1;
                    return (
                      <div key={entry.rank} className="flex items-center gap-3 rounded-xl bg-card py-3">
                        <div className="flex items-center gap-1">
                          <div className={`h-12 w-1 rounded-full ${isOdd ? "bg-yellow-400" : "bg-muted-foreground/30"}`} />
                          <span className="w-6 text-center text-lg font-bold text-muted-foreground">{entry.rank}</span>
                        </div>
                        <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg bg-muted">
                          <img src={entry.thumb} alt="" className="h-full w-full object-cover" />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-black/50">
                              <Play className="h-3.5 w-3.5 fill-white text-white" />
                            </div>
                          </div>
                        </div>
                        {entry.avatar ? (
                          <img src={entry.avatar} alt="" className="h-8 w-8 rounded-full object-cover" />
                        ) : (
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted">
                            <span className="text-muted-foreground text-xs">👤</span>
                          </div>
                        )}
                        <div className="flex-1">
                          <p className="font-bold">{entry.name}</p>
                          <p className="text-xs text-muted-foreground">{entry.handle}</p>
                          <span className="mt-0.5 inline-flex items-center gap-1 rounded-full bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">
                            <Music className="h-3 w-3" /> {entry.song}
                          </span>
                        </div>
                        <div className="text-right pr-2">
                          <span className="text-2xl font-extrabold text-primary">{entry.pts}</span>
                          <p className="text-[10px] font-bold uppercase text-muted-foreground">PTS</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </>
            )}

            {tab === "private" && privateView === "list" && (
              <>
                <div className="mt-4 flex items-center justify-between">
                  <button
                    onClick={() => setPrivateView("join")}
                    className="flex items-center gap-2 rounded-full border border-primary px-5 py-2 text-sm font-bold text-primary"
                  >
                    <ArrowRightFromLine className="h-4 w-4" /> Join by Code
                  </button>
                  <button
                    onClick={() => setPrivateView("create")}
                    className="flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-bold text-primary-foreground"
                  >
                    <Plus className="h-4 w-4" /> Create
                  </button>
                </div>

                <div className="mt-20 flex flex-col items-center text-center">
                  <Trophy className="h-16 w-16 text-muted-foreground/30" />
                  <h3 className="mt-4 text-xl font-bold">No private leaderboards yet</h3>
                  <p className="mt-2 max-w-xs text-sm text-muted-foreground">
                    Create one from any dance video, or join a friend's with their invite code.
                  </p>
                </div>
              </>
            )}
          </main>

          <BottomNav />
        </>
      )}
    </div>
  );
};

export default Leaderboard;
