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
      { name: "Track website activity of new vistors", status: "met" },
    ],
  },
  {
    id: "2",
    name: "Salesforce",
    slug: "salesforce-crm",
    logoUrl: "",
    productScoring: {
      stackfixScore: 5,
      fitScore: 75,
    },
    dealBreakers: ["Complex UX"],
    pricing: {
      totalPrice: 3567.99,
      period: "month",
    },
    requirements: [
      { name: "Store contact or deal information", status: "met" },
      { name: "Email warm up", status: "met" },
      { name: "Email sequencing", status: "met" },
      { name: "Email templates", status: "met" },
      { name: "Geo-fencing lead management", status: "met" },
      { name: "Track website activity of new vistors", status: "unmet" },
    ],
  },
];
