import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { getAllUsers } from "../../utils/apicalls";
import { UserContext } from "./User";

const Navigation = ({ sort, order }) => {
  const [users, setUsers] = useState([]);

  const { user, setUser } = useContext(UserContext);

  const handleChange = (event) => {
    event.preventDefault();
    setUser(event.target.value);
  };

  useEffect(() => {
    getAllUsers().then((users) => {
      setUsers(users);
    });
  }, []);

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to={`/`}>Home </Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>
      </nav>
      <section>
        <p>Logged in User:</p>
        <select name="users" id="users" onChange={handleChange}>
          {users.map((user) => {
            return (
              <option key={user} value={user}>
                {user}
              </option>
            );
          })}
        </select>
      </section>
    </>
  );
};

export default Navigation;
