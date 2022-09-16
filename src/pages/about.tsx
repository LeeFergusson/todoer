import { NextPage } from "next";
import Head from "next/head";

const AboutPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>ToDoer | About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto flex flex-col flex-grow p-2">
        <h2>About ToDoer</h2>
      </main>
    </>
  );
};

export default AboutPage;
