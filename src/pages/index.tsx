import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";

import { api } from "~/utils/api";

export default function Home() {
  const {data} = api.song.getAll.useQuery();
  console.log(data);
  return (
    <>
      <Head>
        <title>Bangers Music</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex justify-center">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Bangers <span className="text-[hsl(280,100%,70%)]">Music</span>
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            {data?.map((song) => (<div key={song.id} className="flex song-card"><img className="h-60 w-60" src={song.thumbnail}/> <p className="song-title w-60">{song.title}</p></div>))}
          </div>
        </div>
      </main>
    </>
  );
}
