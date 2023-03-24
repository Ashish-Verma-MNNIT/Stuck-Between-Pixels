import Head from "next/head";
import Games from "@/components/Games";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>My Games</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-gray-900">
        <div className="">Choose from a list</div>
        <Games />
      </main>
      <Footer />
    </>
  );
}
