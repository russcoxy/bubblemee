import { Heart, MessageCircle, MoreHorizontal, Play, Copy } from "lucide-react";
import BottomNav from "@/components/BottomNav";

const posts = [
  {
    user: "@emmacarter",
    avatar: "https://i.pravatar.cc/60?img=32",
    time: "1d",
    thumb: "https://images.unsplash.com/photo-1547153760-18fc86ef706d?w=800&q=80",
    isVideo: true,
    likes: 0,
    comments: 0,
  },
  {
    user: "@emmacarter",
    avatar: "https://i.pravatar.cc/60?img=32",
    time: "1d",
    thumb: "https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=800&q=80",
    isVideo: false,
    isCarousel: true,
    likes: 0,
    comments: 0,
  },
  {
    user: "@jordangrace",
    avatar: "https://i.pravatar.cc/60?img=14",
    time: "2d",
    thumb: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=800&q=80",
    isVideo: true,
    likes: 12,
    comments: 3,
  },
  {
    user: "@justinneto",
    avatar: "https://i.pravatar.cc/60?img=11",
    time: "3d",
    thumb: "https://images.unsplash.com/photo-1535525153412-5a42439a210d?w=800&q=80",
    isVideo: false,
    likes: 24,
    comments: 5,
  },
];

const Posts = () => {
  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-background px-4 py-3">
        <h1 className="text-center text-lg font-bold">Posts</h1>
      </header>

      {/* Feed */}
      <div>
        {posts.map((post, i) => (
          <div key={i} className="border-b border-border">
            {/* User row */}
            <div className="flex items-center justify-between px-4 py-2.5">
              <div className="flex items-center gap-3">
                <img src={post.avatar} alt="" className="h-10 w-10 rounded-full object-cover" />
                <div>
                  <p className="text-sm font-bold">{post.user}</p>
                  <p className="text-xs text-muted-foreground">{post.time}</p>
                </div>
              </div>
              <button aria-label="More">
                <MoreHorizontal className="h-5 w-5 text-muted-foreground" />
              </button>
            </div>

            {/* Image / Video */}
            <div className="relative aspect-[4/5] w-full bg-muted">
              <img src={post.thumb} alt="" className="h-full w-full object-cover" />
              {post.isVideo && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-black/40">
                    <Play className="h-6 w-6 fill-white text-white" />
                  </div>
                </div>
              )}
              {post.isCarousel && (
                <div className="absolute right-3 top-3">
                  <Copy className="h-5 w-5 text-white drop-shadow" />
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="px-4 py-2.5">
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-1.5 text-sm text-foreground">
                  <Heart className="h-5 w-5" />
                  {post.likes}
                </button>
                <button className="flex items-center gap-1.5 text-sm text-foreground">
                  <MessageCircle className="h-5 w-5" />
                  {post.comments}
                </button>
              </div>
              <p className="mt-1 text-sm font-bold">{post.user}</p>
            </div>
          </div>
        ))}
      </div>

      <BottomNav />
    </div>
  );
};

export default Posts;
