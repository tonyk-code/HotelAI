import { AlertTriangle, Package, Plus } from "lucide-react";

const inventoryData = [
  {
    id: 1,
    item: "Bottled Water",
    quantity: 45,
    threshold: 100,
    unit: "bottles",
  },
  { id: 2, item: "Towels", quantity: 250, threshold: 150, unit: "pieces" },
  { id: 3, item: "Bed Sheets", quantity: 180, threshold: 120, unit: "sets" },
  {
    id: 4,
    item: "Toiletries (Shampoo)",
    quantity: 35,
    threshold: 80,
    unit: "bottles",
  },
  { id: 5, item: "Toilet Paper", quantity: 420, threshold: 200, unit: "rolls" },
  { id: 6, item: "Hand Soap", quantity: 90, threshold: 100, unit: "bars" },
  { id: 7, item: "Coffee Pods", quantity: 15, threshold: 50, unit: "boxes" },
  { id: 8, item: "Pillows", quantity: 200, threshold: 100, unit: "pieces" },
];

export default function Inventory() {
  const lowStockItems = inventoryData.filter(
    (item) => item.quantity < item.threshold,
  );

  return (
    <div className="space-y-8">
      {/* HEADER SECTION */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">
            Inventory Management
          </h1>
          <p className="text-sm text-slate-500 mt-0.5">
            Track and replenish hotel supplies and guest amenities.
          </p>
        </div>
        <button className="flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-200 text-slate-700 rounded-xl font-semibold shadow-sm hover:bg-slate-50 transition-all active:scale-95">
          <Plus size={18} />
          Add New Item
        </button>
      </div>

      {/* REFINED ALERT BOX */}
      {lowStockItems.length > 0 && (
        <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-amber-100 rounded-xl text-amber-600">
              <AlertTriangle size={20} />
            </div>
            <div>
              <p className="text-sm font-semibold text-amber-900">
                Items Requiring Attention
              </p>
              <p className="text-xs text-amber-700 mt-0.5">
                {lowStockItems.length} items are currently below their
                recommended threshold.
              </p>
            </div>
          </div>
          <button className="px-4 py-2 bg-amber-600 text-white rounded-lg text-xs font-bold hover:bg-amber-700 transition-colors">
            Restock All
          </button>
        </div>
      )}

      {/* INVENTORY TABLE */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-slate-50/50 border-b border-slate-100">
                <th className="px-6 py-4 text-left text-[11px] font-semibold text-slate-500 uppercase">
                  Supply Item
                </th>
                <th className="px-6 py-4 text-left text-[11px] font-semibold text-slate-500 uppercase">
                  Stock Level
                </th>
                <th className="px-6 py-4 text-left text-[11px] font-semibold text-slate-500 uppercase">
                  Threshold
                </th>
                <th className="px-6 py-4 text-left text-[11px] font-semibold text-slate-500 uppercase">
                  Usage Capacity
                </th>
                <th className="px-6 py-4 text-right text-[11px] font-semibold text-slate-500 uppercase">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {inventoryData.map((item) => {
                const isLow = item.quantity < item.threshold;
                const percentage = (item.quantity / item.threshold) * 100;

                return (
                  <tr
                    key={item.id}
                    className="group hover:bg-blue-50/30 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div
                          className={`p-2 rounded-lg ${isLow ? "bg-rose-50 text-rose-500" : "bg-slate-100 text-slate-500"}`}
                        >
                          <Package size={16} />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-slate-900">
                            {item.item}
                          </p>
                          {isLow && (
                            <span className="text-[10px] font-bold text-rose-500 uppercase">
                              Low Stock
                            </span>
                          )}
                        </div>
                      </div>
                    </td>

                    <td className="px-6 py-4">
                      <div className="flex items-baseline gap-1 text-sm">
                        <span
                          className={`font-bold ${isLow ? "text-rose-600" : "text-slate-900"}`}
                        >
                          {item.quantity}
                        </span>
                        <span className="text-slate-400 text-xs">
                          {item.unit}
                        </span>
                      </div>
                    </td>

                    <td className="px-6 py-4 text-sm text-slate-500 font-medium">
                      {item.threshold}{" "}
                      <span className="text-[10px] text-slate-300">
                        {item.unit}
                      </span>
                    </td>

                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex-1 bg-slate-100 rounded-full h-1.5 max-w-25">
                          <div
                            className={`h-1.5 rounded-full transition-all duration-500 ${
                              percentage < 50
                                ? "bg-rose-500"
                                : percentage < 80
                                  ? "bg-amber-400"
                                  : "bg-emerald-500"
                            }`}
                            style={{ width: `${Math.min(percentage, 100)}%` }}
                          />
                        </div>
                        <span className="text-[11px] font-bold text-slate-500">
                          {Math.round(percentage)}%
                        </span>
                      </div>
                    </td>

                    <td className="px-6 py-4 text-right">
                      <button
                        className={`text-xs font-bold transition-colors ${
                          isLow
                            ? "text-[#1E3A8A] hover:text-[#3B82F6]"
                            : "text-slate-300 hover:text-slate-500"
                        }`}
                      >
                        {isLow ? "Order Now" : "Manage"}
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
