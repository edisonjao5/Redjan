import { useForm } from "react-hook-form";
import { createTask, deleteTask } from "../api/tasks.api";
import { useNavigate, useParams } from "react-router-dom";

const TaskFormPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const { id } = useParams();

  const submitTask = handleSubmit(async (data) => {
    await createTask(data);
    navigate("/");
  });

  return (
    <div
      style={{
        backgroundColor: "darkred",
        color: "white",
        padding: "1rem",
      }}
    >
      <form onSubmit={submitTask}>
        <input
          style={{ marginBottom: "0.3rem" }}
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
        <button>Save</button>
      </form>
      {id && (
        <button
          style={{ marginTop: "0.5rem" }}
          onClick={async () => {
            const confirm = window.confirm("Are you sure?");
            if (confirm) {
              await deleteTask(id);
              navigate("/");
            }
          }}
        >
          Delete
        </button>
      )}
    </div>
  );
};

export default TaskFormPage;
