import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import Head from "next/head";
import { trpc } from "../utils/trpc";

interface UserListsProps {
  title: string;
}

const UserLists = (props: UserListsProps) => {
  const user = trpc.useQuery(["user.getCurrentUser"]);
  return (
    <>
      <div className="flex">
        <h3 className="text-xl flex-grow">{props.title}</h3>
        <button className="bg-green-600 text-white p-2  rounded-lg text-sm mb-2 shadow-md">
          Create
        </button>
      </div>
      <hr />
      <ul>
        {user.data?.lists.map(item => {
          return (
            <li key={item.id} className="flex justify-between">
              <div>{item.title}</div>
              <button>...</button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

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
            <UserLists title="Recent Lists" />
          </section>
        )}
      </main>
    </>
  );
};

export default Home;
