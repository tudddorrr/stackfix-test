import Head from "next/head";
import { api } from "~/utils/api";
import ProductCard from "~/components/product-card";
import { useCallback, useEffect, useMemo, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { Button } from "~/components/ui/button";
import { useDebounce } from 'use-debounce';
import { Input } from "~/components/ui/input";

type Sort = "totalPrice" | "fitScore" | "stackfixScore";
type Order = "asc" | "desc";

const sortOptions: Sort[] = ["totalPrice", "fitScore", "stackfixScore"];
const orderOptions: Order[] = ["asc", "desc"]; 

export default function Home() {
  const [currentSort, setCurrentSort] = useState<Sort>("totalPrice");
  const [currentOrder, setCurrentOrder] = useState<Order>("asc");
  const [search, setSearch] = useState("");
  const [debouncedSearch] = useDebounce(search, 500);

  const getSortLabel = useCallback((sort: Sort) => {
    switch (sort) {
      case "totalPrice":
        return "Price";
      case "fitScore":
        return "Fit score";
      case "stackfixScore":
        return "Stackfix score";
    }
  }, []);

  const getOrderLabel = useCallback((order: Order) => {
    switch (order) {
      case "asc":
        return "Ascending";
      case "desc":
        return "Descending";
    }
  }, []);

  const { data, isLoading } = api.product.getAll.useQuery({ sort: currentSort, order: currentOrder, search: debouncedSearch });
  const [products, setProducts] = useState(data)

  useEffect(() => {
    if (!isLoading) {
      setProducts(data)
    }
  }, [isLoading, data])

  return (
    <>
      <Head>
        <title>Stackfix</title>
        <meta name="description" content="stackfix.com" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="p-5 space-y-[8px]">
        <h1 className="text-xl">Stackfix Live Challenge</h1>
        <div className="flex items-center space-x-[16px]">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Sort by ({getSortLabel(currentSort)})</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {sortOptions.map((sort) => (
                <DropdownMenuItem key={sort} onClick={() => setCurrentSort(sort)}>
                  {getSortLabel(sort)}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Order by ({getOrderLabel(currentOrder)})</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {orderOptions.map((order) => (
                <DropdownMenuItem key={order} onClick={() => setCurrentOrder(order)}>
                  {getOrderLabel(order)}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <Input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search..."
          />
        </div>

        {isLoading && <p>Loading...</p>}
        {search.length > 0 && products && products.length === 0 && <p>No products found</p>}
        {products && (
          <>
            <ul className="space-y-[8px]">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </ul>
          </>
        )}
      </main>
    </>
  );
}
