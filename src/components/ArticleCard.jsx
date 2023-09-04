import { Link } from "react-router-dom";
import { dateTimeSeperator } from "../../utils/function";

const ArticleCard = ({
  article_id,
  article_img_url,
  author,
  comment_count,
  created_at,
  title,
  topic,
  votes,
}) => {
  const convertedTime = dateTimeSeperator(created_at);
  return (
    <div className="individual-card">
      <Link to={`/articles/${article_id}`}>
        <h2>{title}</h2>
        <p>By: {author}</p>
        <img src={article_img_url} alt={topic} />
        <aside>
          <p>Date Posted: {convertedTime}</p>
          <p>Number of Comments: {comment_count}</p>
          <p>Votes: {votes}</p>
        </aside>
      </Link>
    </div>
  );
};

export default ArticleCard;
