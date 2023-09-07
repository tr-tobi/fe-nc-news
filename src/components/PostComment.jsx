import { useState } from "react";
import { postCommentByArticleId } from "../../utils/apicalls";
import { UserContext } from "./User";
import { useContext } from "react";

const PostComment = ({ article_id, comments, setComments }) => {
  const [comment, setComment] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [isPosted, setIsPosted] = useState(false);
  const [posting, setPosting] = useState(false);
  const { user } = useContext(UserContext);

  const handleChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsDisabled(true);
    setIsPosted(true);
    setPosting(true);

    postCommentByArticleId(article_id, comment, user).then((newComment) => {
      setPosting(false);
      setComments((currentComments) => {
        return [newComment.comment, ...currentComments];
      });
    });
    setComment(comment);
  };

  if (posting) {
    return <p>Posting... </p>;
  }

  return (
    <div className="container-padding">
      <form className="comment-card" onChange={handleChange}>
        <p className="label">Post a Comment</p>
        <textarea
          id="comment"
          cols="30"
          rows="10"
          placeholder="Type comment here"
          onChange={handleChange}
          value={isDisabled ? "" : comment}
        />
        <p hidden={!isPosted}>Comment Posted!</p>
        <button
          value={isPosted ? "" : comment}
          onClick={handleSubmit}
          className="center-button"
          disabled={isDisabled || comment === "" ? true : false}
        >
          Post Comment
        </button>
      </form>
    </div>
  );
};

export default PostComment;
