import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { PopularDirection } from "@/components/popular_directions";
import Head from "next/head";


export default function Home() {
  return (
    <>
     <Head>
        <title>Skypass - billets d&lsquo;avion pas chers</title>
        <meta name="description" content="Recherche de billets d'avion pas chers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main className="container mx-auto px-4 mb-16">
        <PopularDirection />
      </main>

      <Footer />
    </>
  );
}
