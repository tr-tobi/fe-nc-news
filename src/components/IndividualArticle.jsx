import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById, getCommentByArticleId } from "../../utils/apicalls";
import CommentCard from "./CommentCard";
import { dateTimeSeperator } from "../../utils/function";

const IndividualArticle = () => {
  const [article, setArticle] = useState({});
  const { article_id } = useParams();
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    getArticleById(article_id)
      .then((article) => {
        setArticle(article);
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
        <button>Upvote</button>
        <p>Votes: {article.votes}</p>
        <button>DownVote</button>
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
