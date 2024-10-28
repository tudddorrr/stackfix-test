import Head from "next/head";
import { api } from "~/utils/api";

export default function Home() {
  // const products = api.product.getAll.useQuery()

  return (
    <>
      <Head>
        <title>Stackfix</title>
        <meta name="description" content="stackfix.com" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>{/* TODO: Your code here */}</main>
    </>
  );
}
