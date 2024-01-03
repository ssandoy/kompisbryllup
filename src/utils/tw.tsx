import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/** Helper function that wraps `clsx` inside `twMerge` for easily merging several Tailwind classes */
export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};
