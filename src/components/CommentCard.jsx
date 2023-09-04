import { dateTimeSeperator } from "../../utils/function";

const CommentCard = ({ comment_id, body, author, votes, created_at }) => {
  const convertedTime = dateTimeSeperator(created_at);

  return (
    <div className="individual-card">
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
    </div>
  );
};

export default CommentCard;
