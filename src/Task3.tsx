import { Link } from "react-router-dom";
import "./App.css";
const Task3 = () => {
  return (
    <div className="div">
      <ul>
        <li>
          <Link to="/aaa">Task1</Link>
        </li>
        <li>
          <Link to="/bbb">Task2</Link>
        </li>
      </ul>
    </div>
  );
};

export default Task3;
