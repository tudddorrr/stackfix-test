import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

// Mocked DB
interface Product {
  id: number;
  name: string;
}
const products: Product[] = [
  {
    id: 1,
    name: "Hello World",
  },
];

export const productRouter = createTRPCRouter({
  getAll: publicProcedure.query(() => {
    return products;
  }),
});
