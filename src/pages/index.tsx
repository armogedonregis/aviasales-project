import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { PopularDirection } from "@/components/popular_directions";
import { SearchForm } from "@/components/search_form";
import Head from "next/head";


export default function Home() {
  return (
    <>
      <Head>
        <title>Aviasales - дешёвые авиабилеты</title>
        <meta name="description" content="Поиск дешёвых авиабилетов" />
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
