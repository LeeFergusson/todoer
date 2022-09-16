import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

const SessionMenu = () => {
  const session = useSession();

  if (session.status === "authenticated") {
    return (
      <ul>
        <li>
          <button onClick={() => signOut()}>Sign-out</button>
        </li>
      </ul>
    );
  }
  return (
    <ul>
      <li>
        <button onClick={() => signIn()}>Sign-up / Sign-in</button>
      </li>
    </ul>
  );
};

const Header = () => {
  return (
    <div className="min-w-full border-b-2">
      <div className="container mx-auto flex flex-grow p-2">
        <h1 className="text-2xl">
          <Link href="/">ToDoer</Link>
        </h1>
        <div className="flex justify-between w-full">
          <nav className="my-auto">
            <h2 className="hidden">Main Navigation</h2>
            <ul>
              <li className="mx-2 align-middle">
                <Link href="/about">About</Link>
              </li>
            </ul>
          </nav>
          <nav className="my-auto">
            <h2 className="hidden">Session Navigation</h2>
            <SessionMenu />
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
