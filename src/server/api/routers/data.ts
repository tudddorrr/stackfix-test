import { type Product } from "./types";

export const data: Product[] = [
  {
    id: "1",
    name: "Pipedrive",
    slug: "pipedrive-crm",
    logoUrl: "",
    productScoring: {
      stackfixScore: 8,
      fitScore: 87,
    },
    dealBreakers: ["Poor customer support"],
    pricing: {
      totalPrice: 1890.99,
      period: "month",
    },
    requirements: [
      { name: "Store contact or deal information", status: "met" },
      { name: "Email warm up", status: "unmet" },
      { name: "Email sequencing", status: "met" },
      { name: "Email templates", status: "partially-met" },
      { name: "Geo-fencing lead management", status: "unmet" },
      { name: "Track website activity of new vistors", status: "unmet" },
    ],
  },
];
