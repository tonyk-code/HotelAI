import { useState, useRef, useEffect } from "react";
import { Sparkles, User, Bot, Paperclip, ArrowUp } from "lucide-react";
import SuggestionChip from "../../components/ui/SuggestionChip";
import type { Message } from "../../types/message";
import { useChat } from "../../hooks/customhooks/useChat";

const suggestionData = [
  {
    label: "Room Service",
    message: "I'd like to order room service",
  },
  {
    label: "Check Availability",
    message: "Are there any suites available tonight?",
  },
  {
    label: "Spa Menu",
    message: "Show me the spa treatments",
  },
  {
    label: "Late Checkout",
    message: "Request a late checkout",
  },
];

export function Chat() {
  const { mutateAsync: send, isPending } = useChat();
  const [messages, setMessages] = useState<Message[]>(() => {
    const saved = localStorage.getItem("luxe_chat_history");
    return saved
      ? (JSON.parse(saved) as Message[])
      : [
          {
            id: "1",
            text: "Welcome back. I'm your Luxe AI. How can I assist with your stay today?",
            sender: "ai",
            createdAt: Date.now(),
          },
        ];
  });

  const [inputValue, setInputValue] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    localStorage.setItem("luxe_chat_history", JSON.stringify(messages));
    if (scrollRef.current)
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages]);

  const handleSendMessage = async (textOverride?: string) => {
    const text = textOverride || inputValue;
    if (!text.trim() || isPending) return;

    const userMsg: Message = {
      id: crypto.randomUUID(),
      text,
      sender: "user",
      createdAt: new Date().getTime(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");

    try {
      const result = await send({
        message: text,
        history: [...messages, userMsg], // 🔥 send context
      });

      const aiMsg: Message = {
        id: crypto.randomUUID(),
        text: result.reply,
        sender: "ai",
        createdAt: new Date().getTime(),
        meta: result.meta,
      };

      setMessages((prev) => [...prev, aiMsg]);

      if (result.meta?.action === "CREATE_TASK") {
        console.log("Task sent to manager:", result.meta.payload);
      }

      if (result.meta?.action === "SEND_FEEDBACK") {
        console.log("Feedback stored:", result.meta.payload);
      }
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          text: "Something went wrong. Try again.",
          sender: "ai",
          createdAt: Date.now(),
        },
      ]);
    }
  };

  const clearHistory = () => {
    const initial: Message[] = [
      {
        id: "1",
        text: "Chat cleared. How can I help?",
        sender: "ai",
        createdAt: Date.now(),
      },
    ];
    setMessages(initial);
    localStorage.removeItem("luxe_chat_history");
  };

  return (
    <div className="h-screen flex flex-col text-[#1E3A8A] font-sans">
      <nav className="px-6 h-14 mt-4 mx-auto w-[95%] rounded-4xl border border-slate-100 flex items-center justify-between shrink-0 bg-white/50 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-[#3B82F6]" />
          <h1 className="text-xs font-bold uppercase tracking-tight">
            Luxe Concierge
          </h1>
        </div>
        <button
          onClick={clearHistory}
          className="text-[10px] font-bold text-slate-300 hover:text-red-400 transition-colors uppercase"
        >
          Clear History
        </button>
      </nav>

      <div
        ref={scrollRef}
        className="flex-1 pt-8 pb-4 space-y-8 overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        <div className="max-w-3xl mx-auto px-6 space-y-8">
          {messages.map((m: Message) => (
            <div
              key={m.id}
              className={`flex gap-4 animate-in fade-in slide-in-from-bottom-2 ${
                m.sender === "user" ? "flex-row-reverse" : "flex-row"
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 shadow-sm ${
                  m.sender === "user"
                    ? "bg-[#1E3A8A]"
                    : "bg-slate-100 border border-slate-200"
                }`}
              >
                {m.sender === "user" ? (
                  <User className="w-4 h-4 text-white" />
                ) : (
                  <Bot className="w-4 h-4 text-[#3B82F6]" />
                )}
              </div>

              <div
                className={`flex flex-col max-w-[75%] ${m.sender === "user" ? "items-end" : "items-start"}`}
              >
                <div
                  className={`px-5 py-3 rounded-2xl text-[14px] leading-relaxed ${
                    m.sender === "user"
                      ? "bg-slate-100 text-slate-800 rounded-tr-none"
                      : "bg-white border border-slate-100 text-slate-600 rounded-tl-none shadow-sm"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            </div>
          ))}

          {isPending && (
            <div className="flex gap-4 animate-in fade-in">
              <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0">
                <Bot className="w-4 h-4 text-[#3B82F6]" />
              </div>
              <div className="bg-white border border-slate-100 px-5 py-4 rounded-2xl rounded-tl-none flex items-center gap-1.5 shadow-sm">
                <span className="w-1 h-1 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                <span className="w-1 h-1 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                <span className="w-1 h-1 bg-slate-400 rounded-full animate-bounce"></span>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="pb-8 pt-4 bg-linear-to-t from-white via-white to-transparent">
        <div className="max-w-2xl mx-auto px-6 space-y-4">
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
            {suggestionData.map((s, i) => (
              <SuggestionChip
                key={s.label + i}
                label={s.label}
                onClick={() => handleSendMessage(s.message)}
              />
            ))}
          </div>

          <div className="relative flex items-center border border-slate-200 rounded-2xl p-1.5 bg-white shadow-xl shadow-slate-200/40 focus-within:border-blue-400 transition-all">
            <button className="p-2 text-slate-300 hover:text-slate-500 transition-colors">
              <Paperclip className="w-5 h-5" />
            </button>
            <input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
              placeholder="Message Luxe AI..."
              className="flex-1 bg-transparent border-none focus:outline-none text-[14px] px-2 text-slate-700 placeholder:text-slate-300"
              disabled={isPending}
            />
            <button
              onClick={() => handleSendMessage()}
              disabled={!inputValue.trim() || isPending}
              className="w-10 h-10 bg-[#1E3A8A] text-white rounded-xl flex items-center justify-center transition-all hover:bg-[#3B82F6] active:scale-95 disabled:bg-slate-100 disabled:text-slate-300"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
