import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "~/lib/utils"

interface ProgressProps extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
  extraValue?: number;
}

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(({ className, value, extraValue, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "relative h-2 w-full overflow-hidden rounded-full bg-white",
      className
    )}
    {...props}
  >
    {extraValue !== undefined &&
      <ProgressPrimitive.Indicator
        className="h-full w-full flex-1 transition-all absolute bg-[#B0B0B0] bg-opacity-40"
        style={{ transform: `translateX(-${100 - ((value || 0) + extraValue)}%)` }}
      />
    }
    <ProgressPrimitive.Indicator
      className="h-full w-full flex-1 transition-all bg-[#B0B0B0]"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
))
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
