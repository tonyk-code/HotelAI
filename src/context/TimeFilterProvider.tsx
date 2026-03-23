import { TimeFilterContext } from "./TimeFilterContext";
import { type TimeRange } from "../types/Time";
import { useState, type ReactNode } from "react";

export function TimeFilterProvider({ children }: { children: ReactNode }) {
  const [timeRange, setTimeRange] = useState<TimeRange>("Today");

  return (
    <TimeFilterContext.Provider value={{ timeRange, setTimeRange }}>
      {children}
    </TimeFilterContext.Provider>
  );
}
