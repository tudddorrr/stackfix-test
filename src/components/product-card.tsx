import type { Product } from "~/server/api/routers/product/types";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import ProductTitle from "./product-title";
import ProductFit from "./product-fit";
import ProductPricing from "./product-pricing";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="!pt-6 bg-[#FAF7F7] shadow-sm">
      <CardContent>
        <div className="flex items-start flex-row space-x-8">
          <Image
            src={product.logoUrl ?? 'https://placehold.co/400x400?text=P'}
            alt={product.name}
            width={88}
            height={88}
            className="rounded border"
          />

          <div className="grow">
            <ProductTitle product={product} />
            <hr className="mt-[16px]" />
            <ProductFit product={product} />
          </div>

          <div className="w-[1px] bg-border self-stretch" />

          <ProductPricing product={product} />
        </div>
      </CardContent>
    </Card>
  )
}
