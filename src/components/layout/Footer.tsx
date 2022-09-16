const Footer = () => {
  return (
    <div className="flex justify-between p-2 border-t-2">
      <small>
        <a
          className="hover:underline hover:underline-offset-2"
          target="_blank"
          rel="noreferrer"
          href="https://github.com/LeeFergusson/todoer"
        >
          ToDoer@github
        </a>
      </small>
      <small>A next js Application</small>
      <small>
        Created by{" "}
        <a
          className="hover:underline hover:underline-offset-2"
          target="_blank"
          rel="noreferrer"
          href="https://github.com/LeeFergusson"
        >
          Lee Fergusson
        </a>
      </small>
    </div>
  );
};

export default Footer;
