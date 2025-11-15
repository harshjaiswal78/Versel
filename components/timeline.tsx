import type React from "react"
import { cn } from "@/lib/utils"

export interface TimelineProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Timeline({ className, children, ...props }: TimelineProps) {
  return (
    <div className={cn("relative", className)} {...props}>
      {children}
    </div>
  )
}

export interface TimelineItemProps extends React.HTMLAttributes<HTMLDivElement> {}

export function TimelineItem({ className, children, ...props }: TimelineItemProps) {
  return (
    <div className={cn("flex min-h-[70px]", className)} {...props}>
      {children}
    </div>
  )
}

export interface TimelineSeparatorProps extends React.HTMLAttributes<HTMLDivElement> {}

export function TimelineSeparator({ className, children, ...props }: TimelineSeparatorProps) {
  return (
    <div className={cn("flex flex-col items-center", className)} {...props}>
      {children}
    </div>
  )
}

export interface TimelineDotProps extends React.HTMLAttributes<HTMLDivElement> {}

export function TimelineDot({ className, ...props }: TimelineDotProps) {
  return <div className={cn("h-4 w-4 rounded-full bg-primary", className)} {...props} />
}

export interface TimelineConnectorProps extends React.HTMLAttributes<HTMLDivElement> {}

export function TimelineConnector({ className, ...props }: TimelineConnectorProps) {
  return <div className={cn("h-full w-0.5 bg-border", className)} {...props} />
}

export interface TimelineContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export function TimelineContent({ className, children, ...props }: TimelineContentProps) {
  return (
    <div className={cn("flex-grow pt-0.5", className)} {...props}>
      {children}
    </div>
  )
}
