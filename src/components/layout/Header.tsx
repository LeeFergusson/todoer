import Link from "next/link";

const Header = () => {
  return (
    <div className="flex p-2 border-b-2">
      <h1 className="text-2xl">
        <Link href="/">ToDo</Link>
      </h1>
      <div className="flex justify-between w-full">
        <ul className="my-auto">
          <li className="mx-2 align-middle">User Nav</li>
        </ul>
        <ul className="my-auto">
          <li>Session Nav</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
