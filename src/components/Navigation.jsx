import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home </Link>
          </li>
          <li>Topics</li>
          <li>Search by Article id</li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
