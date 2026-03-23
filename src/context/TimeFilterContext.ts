import { createContext } from "react";
import { type TimeRange } from "../types/Time";

interface TimeFilterContextType {
  timeRange: TimeRange;
  setTimeRange: (range: TimeRange) => void;
}

export const TimeFilterContext = createContext<TimeFilterContextType | undefined>(undefined);