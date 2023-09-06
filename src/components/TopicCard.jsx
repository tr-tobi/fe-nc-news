import { Link } from "react-router-dom";

const TopicCard = ({ topic }) => {
  return (
    <div className="individual-card">
      <Link to={`${topic}`}>
        <h2>{topic}</h2>
      </Link>
    </div>
  );
};

export default TopicCard;
