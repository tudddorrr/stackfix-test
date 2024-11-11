import { Progress } from "./ui/progress"
import { type ReactNode } from "react"

type RatingBarProps = {
  label: string
  progress: number
  score: ReactNode
  extraProgress?: number
}

export default function RatingBar({ label, progress, score, extraProgress }: RatingBarProps) {
  console.log(extraProgress)
  return (
    <div className="w-full flex items-center space-x-[8px]">
      <p className="uppercase leading-[-1%] text-[12px] w-[120px]">{label}</p>
      <Progress value={progress} extraValue={extraProgress} className="w-1/2" />
      <div className="flex-end">
        {score}
      </div>
    </div>
  )
}
