import type React from "react"
import { cn } from "@/lib/utils"

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  "aria-label"?: string
}

function Skeleton({ className, "aria-label": ariaLabel, ...props }: SkeletonProps) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-white/10", className)}
      role="status"
      aria-live="polite"
      aria-label={ariaLabel || "Loading content"}
      aria-busy="true"
      {...props}
    />
  )
}

export { Skeleton }
