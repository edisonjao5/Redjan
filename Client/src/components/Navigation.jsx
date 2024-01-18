import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div style={{ paddingBottom: "1rem" }}>
      <Link to={"/"}>
        <h1>Task App</h1>
      </Link>

      <Link to={"/create-task"}>Create Task</Link>
    </div>
  );
}

export default Navigation;
