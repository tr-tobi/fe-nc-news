import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const TopicCard = ({ topicElement, topics }) => {
  return (
    <div className="individual-card">
      <Link to={`${topicElement}`}>
        <h2>{topicElement}</h2>
      </Link>
    </div>
  );
};

export default TopicCard;
