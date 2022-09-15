import Link from "next/link";

const Header = () => {
  return (
    <div className="flex p-2 border-b-2">
      <h1 className="text-2xl">
        <Link href="/">ToDoer</Link>
      </h1>
      <div className="flex justify-between w-full">
        <nav className="my-auto">
          <h2 className="hidden">Main Navigation</h2>
          <ul>
            <li className="mx-2 align-middle">User Nav</li>
          </ul>
        </nav>
        <nav className="my-auto">
          <h2 className="hidden">Session Navigation</h2>
          <ul>
            <li>Session Nav</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
