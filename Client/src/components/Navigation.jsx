import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="flex justify-between items-center py-4 bg-gray-100 px-8 shadow-md mb-4 rounded-md text-amber-950 font-bold text-xl">
      <Link to={"/"}>
        <h1>Task App</h1>
      </Link>

      <Link to={"/create-task"}>Create Task</Link>
    </div>
  );
}

export default Navigation;
