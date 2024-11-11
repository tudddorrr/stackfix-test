import type { Product } from "~/server/api/routers/product/types"
import useProductRequirements from "~/utils/useProductRequirements"
import { Badge } from "./ui/badge"
import RatingBar from "./rating-bar"
import { StarFilledIcon, TriangleRightIcon } from "@radix-ui/react-icons"
import clsx from "clsx"
import HorizontalScoreTreeSVG from "~/assets/horizontal-score-tree-branches.svg"
import Image from "next/image"

export default function ProductFit({ product }: { product: Product }) {
  const { requirementsProgress, totalRequirements, requirementsMet, partiallyMet, fitLevel } = useProductRequirements({ product })

  return (
    <div className="flex items-center pt-[16px]">
      <div className="flex items-center">
        <TriangleRightIcon />
        <Badge className={clsx("ml-[16px]", fitLevel.bgClassName)}>{product.productScoring.fitScore}%</Badge>
        <p className={clsx("ml-[8px]", fitLevel.textClassName)}>{fitLevel.label}</p>
      </div>

      {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
      <Image src={HorizontalScoreTreeSVG} alt="" className="ml-[16px]" width={24} height={28} />
      <div className="grow ml-[6px]">
        <RatingBar
          label="Requirements met"
          progress={requirementsProgress}
          extraProgress={(partiallyMet / totalRequirements) * 50}
          score={
            <span className="text-[12px]">{requirementsMet}/{totalRequirements}</span>
          }
        />
        <RatingBar
          label="Stackfix rating"
          progress={product.productScoring.stackfixScore * 10}
          score={
            <>
              <StarFilledIcon width={12} className="inline-flex mr-[4px]" />
              <span className="text-[12px]">{product.productScoring.stackfixScore.toFixed(1)}</span>
            </>
          }
        />
      </div>
    </div>
  )
}