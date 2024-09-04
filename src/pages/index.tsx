import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { PopularDirection } from "@/components/popular_directions";
import Head from "next/head";


export default function Home() {
  return (
    <>
      <Head>
        <title>Skypass - дешёвые авиабилеты</title>
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
