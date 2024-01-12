import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <Link to={"/"}>
        <h1>Task App</h1>
      </Link>
      <Link to={"/create-task"}>
        <button>Create Task</button>
      </Link>
    </div>
  );
}

export default Navigation;
