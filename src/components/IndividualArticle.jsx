import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getArticleById,
  getCommentByArticleId,
  patchArticleVote,
} from "../../utils/apicalls";
import CommentCard from "./CommentCard";
const IndividualArticle = () => {
  const [article, setArticle] = useState({});
  const { article_id } = useParams();
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [incrIsDisabled, setIncrIsDisabled] = useState(false);
  const [decrIsDisabled, setDecrIsDisabled] = useState(false);
  const [upVoteValue, setUpVoteValue] = useState(1);
  const [downVoteValue, setDownVoteValue] = useState(-1);
  const [votes, setVotes] = useState(0);

  const handleIncr = (event) => {
    event.preventDefault();

    if (upVoteValue === 1) {
      setUpVoteValue(-1);
      setDecrIsDisabled(true);
    } else {
      setUpVoteValue(1);
      setDecrIsDisabled(false);
    }
    patchArticleVote(event.target.value, article_id).then(({ article }) => {
      setVotes(article.votes);
    });
  };

  const handleDecr = (event) => {
    event.preventDefault();

    if (downVoteValue === -1) {
      setDownVoteValue(1);
      setIncrIsDisabled(true);
    } else {
      setDownVoteValue(-1);
      setIncrIsDisabled(false);
    }
    patchArticleVote(event.target.value, article_id).then(({ article }) => {
      setVotes(article.votes);
    });
  };
  useEffect(() => {
    setIsLoading(true);
    getArticleById(article_id)
      .then((article) => {
        setArticle(article);
        setVotes(article.votes);
      })
      .catch((err) => {
        setIsLoading(false);
      });

    getCommentByArticleId(article_id)
      .then((comments) => {
        setComments(comments);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
      });
  }, [article_id]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="individual-card">
        <h2>{article.title}</h2>
        <p>By: {article.author}</p>
        <img src={article.article_img_url} alt={article.topic} />
        <section>
          <p>{article.body}</p>
        </section>
        <aside>
          <p>Date Posted: {article.created_at}</p>
          <p>Number of Comments: {article.comment_count}</p>
        </aside>
        <div>
          <button
            onClick={handleIncr}
            disabled={incrIsDisabled ? true : false}
            value={upVoteValue}
          >
            Upvote
          </button>
          <p>Votes: {votes}</p>
          <button
            onClick={handleDecr}
            disabled={decrIsDisabled ? true : false}
            value={downVoteValue}
          >
            DownVote
          </button>
        </div>
      </div>
      <h2>Comments</h2>
      {comments.length === 0 ? (
        <p>No comments available for this article.</p>
      ) : (
        comments.map(({ comment_id, body, author, votes, created_at }) => {
          return (
            <CommentCard
              key={comment_id}
              body={body}
              author={author}
              votes={votes}
              created_at={created_at}
            />
          );
        })
      )}
    </>
  );
};

export default IndividualArticle;
