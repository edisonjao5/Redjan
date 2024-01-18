import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const TaskCard = ({ task }) => {
  const navigate = useNavigate();

  return (
    <div
      style={{ backgroundColor: "darkred", color: "white" }}
      onClick={() => navigate(`/task/${task.id}`)}
    >
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <hr />
    </div>
  );
};

TaskCard.propTypes = {
  task: PropTypes.object.isRequired,
};

export default TaskCard;
