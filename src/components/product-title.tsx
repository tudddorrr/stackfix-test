import type { Product } from "~/server/api/routers/product/types";
import { CardTitle } from "./ui/card";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import { Badge } from "./ui/badge";
import Link from "next/link";

export default function ProductTitle({ product }: { product: Product }) {
  return (
    <div className="flex items-center">
      <CardTitle className="text-[24px] font-normal">{product.name}</CardTitle>
      <Link href={`/products/${product.slug}`}>
        <ExternalLinkIcon className="ml-[8px]" />
      </Link>
      {product.dealBreakers.length > 0 &&
        <Badge className="ml-[24px] bg-[#F0B3B3]/50 shadow-none text-black font-normal hover:bg-[#F0B3B3]/50">
          {product.dealBreakers.join(", ")}
        </Badge>
      }
    </div>
  )
}
