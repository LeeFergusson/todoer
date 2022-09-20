import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import Head from "next/head";

const Home: NextPage = () => {
  const session = useSession();

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto flex flex-col flex-grow p-2">
        {session.status !== "authenticated" ? (
          <h2>Home Page</h2>
        ) : (
          <section className="max-w-md border-2 p-2 rounded-md">
            <div className="flex">
              <h3 className="text-xl flex-grow">Recent Lists</h3>
              <button className="bg-green-600 text-white p-2  rounded-lg text-sm mb-2 shadow-md">
                Create
              </button>
            </div>
            <hr />
            <ul>
              <li>Item 1</li>
              <li>Item 1</li>
            </ul>
          </section>
        )}
      </main>
    </>
  );
};

export default Home;
