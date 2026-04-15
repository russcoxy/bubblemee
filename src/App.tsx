import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Login from "./pages/Login";
import OtpVerify from "./pages/OtpVerify";
import TroubleSigningIn from "./pages/TroubleSigningIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Discover from "./pages/Discover";
import Posts from "./pages/Posts";
import Leaderboard from "./pages/Leaderboard";
import Messages from "./pages/Messages";
import Profile from "./pages/Profile";
import Studio from "./pages/Studio";
import VideoPlayer from "./pages/VideoPlayer";
import CreatorProfile from "./pages/CreatorProfile";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/otp" element={<OtpVerify />} />
          <Route path="/trouble" element={<TroubleSigningIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/studio" element={<Studio />} />
          <Route path="/video/:id" element={<VideoPlayer />} />
          <Route path="/creator/:username" element={<CreatorProfile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
