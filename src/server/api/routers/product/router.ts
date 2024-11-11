import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { data } from "./data";
import { z } from "zod";

export const productRouter = createTRPCRouter({
  getAll: publicProcedure.input(
    z.object({
      sort: z.enum(["totalPrice", "fitScore", "stackfixScore"]),
      order: z.enum(["asc", "desc"]),
      search: z.string().optional(),
    })
  ).query(async (opts) => {
    const sortBy = opts.input.sort;
    const orderBy = opts.input.order;
    const search = opts.input.search;

    const filteredData = data.filter((product) => {
      if (search) {
        return product.name.toLocaleLowerCase().includes(search.toLocaleLowerCase());
      }
      return true;
    }).sort((a, b) => {
      switch (sortBy) {
        case 'fitScore':
          return orderBy === 'asc'
            ? a.productScoring.fitScore - b.productScoring.fitScore
            : b.productScoring.fitScore - a.productScoring.fitScore;
        case 'stackfixScore':
          return orderBy === 'asc'
            ? a.productScoring.stackfixScore - b.productScoring.stackfixScore
            : b.productScoring.stackfixScore - a.productScoring.stackfixScore;
        case 'totalPrice':
          return orderBy === 'asc'
            ? a.pricing.totalPrice - b.pricing.totalPrice
            : b.pricing.totalPrice - a.pricing.totalPrice;

      }
    });

    await new Promise((resolve) => setTimeout(resolve, 100));
    return filteredData;
  }),
});
