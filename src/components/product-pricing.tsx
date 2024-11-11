import type { Product } from "~/server/api/routers/product/types";
import { Button } from "./ui/button";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import { useMemo } from "react";
import Link from "next/link";

export default function ProductPricing({ product }: { product: Product }) {
  const price = useMemo(() => {
    return new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP', maximumFractionDigits: 0 }).format(product.pricing.totalPrice)
  }, [product.pricing.totalPrice])

  return (
    <div>
      <p className="text-right text-[24px]">{price}</p>
      <p className="text-right text-[12px] items-center mt-[8px]">
        Per {product.pricing.period}
        <InfoCircledIcon className="inline-block" width={16} />
      </p>
      <Button className="mt-[16px]" variant='outline' asChild>
        <Link href={`/products/${product.slug}`}>More details</Link>
      </Button>
    </div>
  )
}
