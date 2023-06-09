import { type NextPage } from "next";
import Head from "next/head";

import Navbar from "~/components/Navbar";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <Navbar />
        <div className="flex flex-col items-center">
          <h1 className="text-6xl">Tactify</h1>
          <h2 className="text-slate-400">The Art of Winning in Team Fight Tactics</h2>
          <div className="flex flex-col w-96 border  rounded p-5 mt-4">
            <p>
              Welcome to Tactify, the ultimate guide to mastering the art of winning in Team Fight Tactics. Whether youre a seasoned player or just starting out, our expertly crafted composition strategies will help you dominate the competition.
            </p>
            <p className="mt-2">
              With Tactify, youll gain access to a comprehensive set of tactics and tips that will give you an edge in every game. From early-game decisions to late-game adaptations, weve got you covered with proven strategies that have been tested and refined by top TFT players.
            </p>
            <p className="mt-2">
              Our user-friendly interface makes it easy to browse and select the perfect composition for your playstyle, and our up-to-date information ensures that you always have the latest meta strategies at your fingertips.
            </p>

            <p className="mt-2">
              Join the Tactify community today and take your TFT game to the next level!
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
