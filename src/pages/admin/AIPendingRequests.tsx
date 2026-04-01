import { useState } from "react";
import {
  MessageSquareOff,
  Clock,
  CheckCircle2,
  AlertCircle,
  Mail,
  ArrowRight,
} from "lucide-react";

import { useAIRequests } from "../../hooks/query/useAIRequests";
import { useResolveRequest } from "../../hooks/mutation/useResolveRequest";
import { type AIRequest } from "../../types/ai";

export default function AIPendingRequests() {
  const { data, isLoading } = useAIRequests();
  const { mutateAsync, isPending } = useResolveRequest();

  const requests: AIRequest[] = Array.isArray(data) ? data : [];

  const [responses, setResponses] = useState<Record<string, string>>({});
  const [activeId, setActiveId] = useState<string | null>(null);

  const handleInputChange = (id: string, value: string) => {
    setResponses((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleResolve = async (id: string) => {
    const managerResponse = responses[id];
    if (!managerResponse) return;

    setActiveId(id);

    try {
      await mutateAsync({
        requestId: id,
        response: managerResponse,
      });

      setResponses((prev) => {
        const copy = { ...prev };
        delete copy[id];
        return copy;
      });
    } catch (error) {
      console.error("Failed to resolve request:", error);
    } finally {
      setActiveId(null);
    }
  };

  if (isLoading) {
    return (
      <div className="space-y-4 p-6">
        <div className="h-6 w-40 bg-gray-200 rounded animate-pulse" />
        <div className="h-32 bg-gray-100 rounded-xl animate-pulse" />
        <div className="h-32 bg-gray-100 rounded-xl animate-pulse" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <header className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold text-[#111827]">
          AI Assistance Required
        </h2>
        <p className="text-slate-500 text-sm">
          Provide verified answers for queries the AI couldn't resolve.
        </p>
      </header>

      {requests.length === 0 ? (
        <div className="bg-white rounded-2xl p-12 flex flex-col items-center justify-center border border-dashed border-slate-300">
          <div className="p-4 bg-emerald-50 rounded-full mb-4">
            <CheckCircle2 className="text-emerald-500" size={32} />
          </div>
          <h3 className="text-lg font-semibold text-slate-900">All Clear</h3>
          <p className="text-slate-500">
            No guest queries are currently waiting.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {requests.map((request) => (
            <div
              key={request.id}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col md:flex-row hover:shadow-md"
            >
              {/* LEFT */}
              <div className="p-6 md:w-1/3 bg-slate-50 border-r border-r-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center font-bold">
                    {request.guestName.charAt(0)}
                  </div>
                  <div className="overflow-hidden">
                    <h4 className="font-bold text-sm truncate">
                      {request.guestName}
                    </h4>
                    <p className="text-xs text-gray-500 flex items-center gap-1 truncate">
                      <Mail size={10} /> {request.guestEmail}
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <MessageSquareOff
                      size={16}
                      className="text-rose-500 mt-1 shrink-0"
                    />
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase">
                        Guest Query
                      </p>
                      <p className="text-sm text-slate-700 italic mt-1">
                        "{request.query}"
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <Clock size={12} />
                    {request.timestamp}
                  </div>
                </div>
              </div>

              {/* RIGHT */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <textarea
                  rows={3}
                  className="w-full p-4 border border-gray-200 rounded-xl"
                  placeholder="Provide a clear answer..."
                  value={responses[request.id] || ""}
                  onChange={(e) =>
                    handleInputChange(request.id, e.target.value)
                  }
                />

                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-amber-600 text-xs">
                    <AlertCircle size={14} />
                    Learning Enabled
                  </div>

                  <button
                    onClick={() => handleResolve(request.id)}
                    disabled={
                      !responses[request.id] ||
                      (isPending && activeId === request.id)
                    }
                    className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold
                      ${
                        !responses[request.id] ||
                        (isPending && activeId === request.id)
                          ? "bg-gray-200 text-gray-400"
                          : "bg-blue-700 text-white hover:bg-blue-800"
                      }`}
                  >
                    {isPending && activeId === request.id ? (
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        Resolve <ArrowRight size={16} />
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
