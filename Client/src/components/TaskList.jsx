import { useState, useEffect } from "react";
import { getTasks } from "../api/tasks.api";
import TaskCard from "./TaskCard";

function TaskList() {
  const [task, setTask] = useState([]);

  useEffect(() => {
    async function fetchTasks() {
      const res = await getTasks();
      setTask(res.data);
    }
    fetchTasks();
  }, []);

  return task && task.map((task) => <TaskCard key={task.id} task={task} />);
}

export default TaskList;
