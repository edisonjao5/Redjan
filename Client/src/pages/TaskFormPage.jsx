import { useState, useEffect } from "react";
import { set, useForm } from "react-hook-form";
import { createTask, deleteTask, updateTask, getTask } from "../api/tasks.api";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

const TaskFormPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  // if (window.location.pathname === "/create-task") {
  //   setValue("title", "");
  //   setValue("description", "");
  // }

  const navigate = useNavigate();
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const loadTask = async () => {
      if (id) {
        // const rest = await getTask(id);
        // setValue("title", rest.data.title);
        // setValue("description", rest.data.description);
        const {
          data: { title, description },
        } = await getTask(id);
        setValue("title", title);
        setValue("description", description);
      }
    };
    loadTask();
  }, []);

  const submitTask = handleSubmit(async (data) => {
    if (id) {
      await updateTask(id, data);
      toast.success("Task updated");
    } else {
      await createTask(data);
      toast.success("Task created");
    }
    navigate("/");
  });

  const confirmDelete = async () => {
    await deleteTask(id);
    toast.success("Task deleted");
    navigate("/");
  };

  if (isOpen) {
    return (
      <div className="flex justify-center items-center h-screen w-full bg-gray-200">
        <div className="bg-white shadow-xl rounded px-8 pt-6 pb-8 mb-4">
          <h1 className="text-2xl mb-2">Are you sure to delete this task?</h1>
          <br />
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"
            onClick={confirmDelete}
          >
            Yes
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"
            onClick={() => setIsOpen(false)}
          >
            No
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center h-screen w-full bg-gray-200">
      <div className="bg-white shadow-xl rounded px-8 pt-6 pb-8 mb-4">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={submitTask}
        >
          <h1 className="text-2xl mb-2">
            {id ? "Update Task" : "Create Task"}
          </h1>
          <br />
          <input
            className="border-2 border-gray-400 mb-2 w-full px-3 py-2"
            type="text"
            placeholder="Title"
            {...register("title", { required: true })}
          />
          {errors.title && <span>Title is required</span>}
          <br />
          <textarea
            className="border-2 border-gray-400 mt-2 mb-2 w-full px-3 py-2"
            placeholder="Description"
            {...register("description", { required: true })}
          />
          {errors.description && <span>Description is required</span>}
          <br />
        </form>
        <button
          onClick={submitTask}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-11"
        >
          {id ? "Update" : "Create"}
        </button>
        {id && (
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded justify-end ml-14"
            onClick={() => setIsOpen(true)}
          >
            Delete
          </button>
        )}
      </div>
    </div>
  );
};

export default TaskFormPage;
