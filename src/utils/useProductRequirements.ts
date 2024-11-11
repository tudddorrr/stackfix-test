import { useCallback } from "react";
import type { Product } from "~/server/api/routers/product/types";

type FitLevel = {
  label: 'Not good fit' | 'Okay fit' | 'Great fit',
  bgClassName: string,
  textClassName: string
}

type ProductRequirements = {
  totalRequirements: number
  requirementsMet: number
  partiallyMet: number
  requirementsProgress: number
  fitLevel: FitLevel
}

export default function useProductRequirements({ product }: { product: Product }): ProductRequirements {
  const totalRequirements = product.requirements.length
  const requirementsMet = product.requirements.filter((r) => r.status === 'met').length
  const partiallyMet = product.requirements.filter((r) => r.status === 'partially-met').length

  const getRequirementsProgress = useCallback(() => {
    return requirementsMet / totalRequirements * 100
  }, [requirementsMet, totalRequirements])

  const getFitLevel = useCallback((): FitLevel => {
    const requirementsProgress = getRequirementsProgress()
    if (requirementsProgress < 50) {
      return { label: 'Not good fit', textClassName: 'text-destructive', bgClassName: 'bg-destructive hover:bg-destructive' }
    } else if (requirementsProgress < 75) {
      return { label: 'Okay fit', textClassName: 'text-[#FDB71C]', bgClassName: 'bg-[#FDB71C] hover:bg-[#FDB71C]' }
    } else {
      return { label: 'Great fit', textClassName: 'text-green-600', bgClassName: 'bg-green-600 hover:bg-green-600]' }
    }
  }, [getRequirementsProgress])

  return {
    totalRequirements,
    requirementsMet,
    partiallyMet,
    requirementsProgress: getRequirementsProgress(),
    fitLevel: getFitLevel()
  }
}
