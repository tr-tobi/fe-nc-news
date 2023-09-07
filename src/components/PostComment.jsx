import { useState } from "react";
import { postCommentByArticleId } from "../../utils/apicalls";
import { UserContext } from "./User";
import { useContext } from "react";

const PostComment = ({ article_id, comments, setComments }) => {
  const [comment, setComment] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [isPosted, setIsPosted] = useState(false);
  const { user } = useContext(UserContext);

  const handleChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsDisabled(true);
    setIsPosted(true);
    postCommentByArticleId(article_id, comment, user).then((newComment) => {
      setComments((currentComments) => {
        return [newComment.comment, ...currentComments];
      });
    });
    setComment(comment);
  };

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
        <button
          value={isPosted ? "" : comment}
          onClick={handleSubmit}
          className="center-button"
          disabled={isDisabled ? true : false}
        >
          Post Comment
        </button>
      </form>
    </div>
  );
};

export default PostComment;
