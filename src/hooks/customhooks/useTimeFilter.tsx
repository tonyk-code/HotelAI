import { useContext } from "react";
import { TimeFilterContext } from "../../context/TimeFilterContext";

export function useTimeFilter() {
  const context = useContext(TimeFilterContext);
  if (!context) {
    throw new Error("useTimeFilter must be used within TimeFilterProvider");
  }
  return context;
}
