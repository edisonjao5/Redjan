import { useForm } from "react-hook-form";
import { createTask } from "../api/tasks.api";
import { useNavigate } from "react-router-dom";

const TaskFormPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const submitTask = handleSubmit(async (data) => {
    await createTask(data);
    navigate("/");
  });

  return (
    <div>
      <form onSubmit={submitTask}>
        <input
          type="text"
          placeholder="Title"
          {...register("title", { required: true })}
        />
        {errors.title && <span>Title is required</span>}
        <br />
        <textarea
          placeholder="Description"
          {...register("description", { required: true })}
        />
        {errors.description && <span>Description is required</span>}
        <br />
        <button>Create Task</button>
      </form>
    </div>
  );
};

export default TaskFormPage;
