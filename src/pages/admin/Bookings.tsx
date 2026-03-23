import { Search, ChevronDown, Calendar as CalendarIcon } from "lucide-react";

const bookingsData = [
  {
    id: 1,
    guest: "Alice Johnson",
    room: "305",
    checkIn: "2026-03-18",
    checkOut: "2026-03-22",
    status: "confirmed",
  },
  {
    id: 2,
    guest: "Bob Williams",
    room: "102",
    checkIn: "2026-03-19",
    checkOut: "2026-03-21",
    status: "confirmed",
  },
  {
    id: 3,
    guest: "Charlie Brown",
    room: "208",
    checkIn: "2026-03-20",
    checkOut: "2026-03-25",
    status: "confirmed",
  },
  {
    id: 4,
    guest: "Diana Prince",
    room: "401",
    checkIn: "2026-03-15",
    checkOut: "2026-03-20",
    status: "cancelled",
  },
  {
    id: 5,
    guest: "Ethan Hunt",
    room: "512",
    checkIn: "2026-03-21",
    checkOut: "2026-03-24",
    status: "confirmed",
  },
  {
    id: 6,
    guest: "Fiona Green",
    room: "203",
    checkIn: "2026-03-22",
    checkOut: "2026-03-26",
    status: "confirmed",
  },
  {
    id: 7,
    guest: "George Miller",
    room: "109",
    checkIn: "2026-03-20",
    checkOut: "2026-03-23",
    status: "confirmed",
  },
  {
    id: 8,
    guest: "Hannah Lee",
    room: "315",
    checkIn: "2026-03-18",
    checkOut: "2026-03-19",
    status: "cancelled",
  },
];

export function Bookings() {
  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-[#111827]">Bookings</h1>
      </div>

      {/* Search and Filters Bar */}
      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <div className="flex-1 relative w-full group">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#3B82F6] transition-colors"
            size={18}
          />
          <input
            type="text"
            placeholder="Search guests, rooms, or dates..."
            className="w-full pl-12 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-blue-50 focus:border-[#3B82F6] transition-all"
          />
        </div>

        <div className="relative w-full sm:w-48">
          <select className="w-full appearance-none bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-700 focus:outline-none focus:ring-4 focus:ring-blue-50 cursor-pointer">
            <option>All Status</option>
            <option>Confirmed</option>
            <option>Cancelled</option>
          </select>
          <ChevronDown
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
            size={16}
          />
        </div>
      </div>

      {/* Bookings Table */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-slate-50 text-left">
              <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase">
                Guest
              </th>
              <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase">
                Room
              </th>
              <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase">
                Check-In
              </th>
              <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase">
                Check-Out
              </th>
              <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase text-right">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {bookingsData.map((booking) => (
              <tr
                key={booking.id}
                className="hover:bg-slate-50/50 transition-colors group"
              >
                <td className="px-6 py-4">
                  <p className="text-sm font-semibold text-[#111827] group-hover:text-[#1E3A8A] transition-colors">
                    {booking.guest}
                  </p>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm font-medium text-slate-600 bg-slate-100 px-2 py-1 rounded-md">
                    {booking.room}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-slate-600">
                  <div className="flex items-center gap-2">
                    <CalendarIcon size={14} className="text-slate-400" />
                    {booking.checkIn}
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-slate-600">
                  {booking.checkOut}
                </td>
                <td className="px-6 py-4 text-right">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${
                      booking.status === "confirmed"
                        ? "bg-emerald-50 text-emerald-700"
                        : "bg-rose-50 text-rose-700"
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        booking.status === "confirmed"
                          ? "bg-emerald-500"
                          : "bg-rose-500"
                      }`}
                    />
                    {booking.status.charAt(0).toUpperCase() +
                      booking.status.slice(1)}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
