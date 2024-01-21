import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const TaskCard = ({ task }) => {
  const navigate = useNavigate();

  return (
    <div
      className="bg-white shadow-lg rounded-lg px-4 py-6 text-center hover:bg-gray-100 cursor-pointer"
      onClick={() => navigate(`/task/${task.id}`)}
    >
      <h2 className="text-cyan-500 font-bold underline decoration-pink-500 uppercase">
        {task.title}
      </h2>
      <p className="font-medium text-amber-950 italic">{task.description}</p>
    </div>
  );
};

TaskCard.propTypes = {
  task: PropTypes.object.isRequired,
};

export default TaskCard;
