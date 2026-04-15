import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SquarePen, ChevronLeft, Search, Send } from "lucide-react";
import BottomNav from "@/components/BottomNav";

const conversations = [
  { name: "Russ Cox", handle: "@russcoxy", avatar: "https://i.pravatar.cc/80?img=33", lastMsg: "Hey 👋", time: "3s" },
];

type View = "list" | "chat" | "new";

const Messages = () => {
  const [view, setView] = useState<View>("list");
  const [activeChat, setActiveChat] = useState(conversations[0]);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  if (view === "new") {
    return (
      <div className="min-h-screen bg-background md:mx-auto md:w-[60%]">
        <header className="flex items-center gap-3 px-4 pt-6 pb-3 border-b border-border">
          <button onClick={() => setView("list")}>
            <ChevronLeft className="h-6 w-6" />
          </button>
          <h1 className="text-lg font-bold">New Message</h1>
        </header>
        <div className="px-4 py-3 border-b border-border bg-muted/30">
          <div className="flex items-center gap-2 rounded-xl bg-muted px-4 py-2.5">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input placeholder="Search by name or username…" className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center pt-40 text-center">
          <Search className="h-12 w-12 text-muted-foreground/30" />
          <p className="mt-3 text-sm text-muted-foreground">Search for someone to message</p>
        </div>
        <BottomNav />
      </div>
    );
  }

  if (view === "chat") {
    return (
      <div className="flex min-h-screen flex-col bg-background md:mx-auto md:w-[60%]">
        <header className="flex items-center gap-3 px-4 pt-4 pb-3 border-b border-border">
          <button onClick={() => setView("list")}>
            <ChevronLeft className="h-6 w-6" />
          </button>
          <img src={activeChat.avatar} alt="" className="h-10 w-10 rounded-full border-2 border-primary object-cover" />
          <div>
            <p className="font-bold">{activeChat.name}</p>
            <p className="text-xs text-muted-foreground">{activeChat.handle}</p>
          </div>
        </header>

        <div className="flex-1 px-4 py-4">
          {/* Sent message */}
          <div className="flex justify-end">
            <div>
              <div className="rounded-2xl bg-primary px-4 py-2.5 text-white">
                Hey 👋
              </div>
              <p className="mt-1 text-right text-xs text-muted-foreground">16:19</p>
            </div>
          </div>
        </div>

        {/* Input */}
        <div className="border-t border-border px-4 py-3">
          <div className="flex items-center gap-3">
            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message…"
              className="flex-1 rounded-full border border-border bg-background px-4 py-2.5 text-sm outline-none placeholder:text-muted-foreground"
            />
            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
              <Send className="h-5 w-5 text-muted-foreground" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-20 md:mx-auto md:w-[60%]">
      <header className="flex items-center justify-between px-4 pt-6 pb-2">
        <h1 className="text-3xl font-extrabold">Messages</h1>
        <button
          onClick={() => setView("new")}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-background border border-border"
        >
          <SquarePen className="h-5 w-5" />
        </button>
      </header>

      <div className="divide-y divide-border">
        {conversations.map((conv) => (
          <button
            key={conv.handle}
            onClick={() => { setActiveChat(conv); setView("chat"); }}
            className="flex w-full items-center gap-3 px-4 py-3 text-left"
          >
            <img src={conv.avatar} alt="" className="h-14 w-14 rounded-full object-cover" />
            <div className="flex-1">
              <p className="font-bold">{conv.name}</p>
              <p className="text-sm text-muted-foreground">{conv.lastMsg}</p>
            </div>
            <span className="text-xs text-muted-foreground">{conv.time}</span>
          </button>
        ))}
      </div>

      <BottomNav />
    </div>
  );
};

export default Messages;
