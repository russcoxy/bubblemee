import { useNavigate, useParams } from "react-router-dom";
import { ChevronLeft, Play, Heart, Eye, MessageCircle, Share2, TrendingUp } from "lucide-react";

const videoData: Record<string, { title: string; creator: string; avatar: string; thumb: string; views: number; likes: number; comments: number }> = {
  "kiss-more": { title: "Kiss More", creator: "Estelle Bliah", avatar: "https://i.pravatar.cc/40?img=15", thumb: "https://images.unsplash.com/photo-1547153760-18fc86ef706d?w=800&q=80", views: 182, likes: 1, comments: 1 },
  "laxed-siren-beat": { title: "Laxed (Siren Beat)", creator: "Estelle Bliah", avatar: "https://i.pravatar.cc/40?img=15", thumb: "https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=800&q=80", views: 115, likes: 1, comments: 0 },
  "cupid": { title: "Cupid", creator: "Estelle Bliah", avatar: "https://i.pravatar.cc/40?img=15", thumb: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=800&q=80", views: 119, likes: 0, comments: 0 },
  "say-so": { title: "Say So", creator: "Estelle Bliah", avatar: "https://i.pravatar.cc/40?img=15", thumb: "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=800&q=80", views: 480, likes: 2, comments: 0 },
  "blinding-lights": { title: "Blinding Lights", creator: "Estelle Bliah", avatar: "https://i.pravatar.cc/40?img=15", thumb: "https://images.unsplash.com/photo-1535525153412-5a42439a210d?w=800&q=80", views: 92, likes: 0, comments: 0 },
  "out-west": { title: "Out West", creator: "Estelle Bliah", avatar: "https://i.pravatar.cc/40?img=15", thumb: "https://images.unsplash.com/photo-1550026593-f369f4955b88?w=800&q=80", views: 67, likes: 1, comments: 0 },
};

const VideoPlayer = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const video = videoData[id || "kiss-more"] || videoData["kiss-more"];

  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      {/* Container: full on mobile, constrained on iPad/desktop */}
      <div className="relative w-full md:mx-auto md:max-w-[480px] md:h-[calc(100vh-2rem)] h-screen overflow-hidden md:rounded-2xl">
        {/* Background image */}
        <img
          src={video.thumb}
          alt={video.title}
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/10" />

        {/* Back button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute left-4 top-12 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/40"
        >
          <ChevronLeft className="h-6 w-6 text-white" />
        </button>

        {/* Record button - top center */}
        <div className="absolute left-1/2 top-10 z-20 -translate-x-1/2 flex flex-col items-center gap-1">
          <div className="flex h-14 w-14 items-center justify-center rounded-full border-[3px] border-white/40">
            <div className="h-10 w-10 rounded-full bg-pink-500" />
          </div>
          <span className="text-xs font-medium text-white drop-shadow">Record</span>
        </div>

        {/* Center play button */}
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-black/30">
            <Play className="h-8 w-8 fill-white/80 text-white/80" />
          </div>
        </div>

        {/* Right side actions */}
        <div className="absolute right-4 bottom-44 z-20 flex flex-col items-center gap-5">
          <button className="flex flex-col items-center gap-1">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-pink-500">
              <TrendingUp className="h-5 w-5 text-white" />
            </div>
          </button>
          <button className="flex flex-col items-center gap-1">
            <Heart className="h-7 w-7 text-pink-500 fill-pink-500" />
            <span className="text-xs font-bold text-white drop-shadow">{video.likes}</span>
          </button>
          <button className="flex flex-col items-center gap-1">
            <Eye className="h-7 w-7 text-white/80" />
            <span className="text-xs font-bold text-white drop-shadow">{video.views}</span>
          </button>
          <button className="flex flex-col items-center gap-1">
            <MessageCircle className="h-7 w-7 text-white/80" />
            <span className="text-xs font-bold text-white drop-shadow">{video.comments}</span>
          </button>
          <button className="flex flex-col items-center gap-1">
            <Share2 className="h-7 w-7 text-white/80" />
            <span className="text-xs font-bold text-white drop-shadow">Share</span>
          </button>
        </div>

        {/* Bottom info */}
        <div className="absolute bottom-6 left-4 right-20 z-20">
          <h2 className="text-lg font-bold text-white drop-shadow">{video.title}</h2>
          <div className="mt-2 flex items-center gap-2">
            <img src={video.avatar} alt={video.creator} className="h-9 w-9 rounded-full border-2 border-white/60" />
            <span className="text-sm font-semibold text-white drop-shadow">{video.creator}</span>
            <button className="ml-2 rounded-full bg-white px-4 py-1.5 text-xs font-bold text-black">
              Follow
            </button>
          </div>
        </div>

        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 right-0 z-20 px-4 pb-2">
          <div className="relative h-1 w-full rounded-full bg-white/30">
            <div className="absolute left-0 top-0 h-1 w-[45%] rounded-full bg-white" />
            <div className="absolute top-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-white" style={{ left: "45%" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
