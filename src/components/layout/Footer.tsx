import { useSession } from "next-auth/react";

const Footer = () => {
  const session = useSession();

  return (
    <div className="border-t-2">
      <div className="container mx-auto flex justify-between p-2">
        {session.status === "authenticated" ? (
          <small>Signed in as: {session.data.user?.name}</small>
        ) : (
          <small>
            <a
              className="hover:underline hover:underline-offset-2"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/LeeFergusson/todoer">
              ToDoer@github
            </a>
          </small>
        )}

        <small>A next js Application</small>
        <small>
          Created by{" "}
          <a
            className="hover:underline hover:underline-offset-2"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/LeeFergusson">
            Lee Fergusson
          </a>
        </small>
      </div>
    </div>
  );
};

export default Footer;
