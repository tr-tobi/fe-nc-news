import { dateTimeSeperator } from "../../utils/function";
import { useContext, useState } from "react";
import { UserContext } from "./User";
import { deleteCommentById } from "../../utils/apicalls";

const CommentCard = ({
  comment_id,
  body,
  author,
  votes,
  created_at,
  comments,
  setComments,
}) => {
  const convertedTime = dateTimeSeperator(created_at);
  const [isDeleted, setisDeleted] = useState(false);

  const { user } = useContext(UserContext);

  const handleClick = (event) => {
    event.preventDefault();
    deleteCommentById(comment_id).then(() => {
      setisDeleted(true);
    });

    return;
  };

  return (
    <div hidden={isDeleted} className="individual-card">
      <p className="text-left">
        {author} at {convertedTime}:
      </p>
      <section>
        <p className="comment-body">{body}</p>
      </section>
      <div>
        <button>Upvote</button>
        <p>Votes: {votes}</p>
        <button>DownVote</button>
      </div>
      <form>
        <button
          onClick={handleClick}
          hidden={user !== author}
          className="delete-card"
        >
          Delete Comment
        </button>
      </form>
    </div>
  );
};

export default CommentCard;
