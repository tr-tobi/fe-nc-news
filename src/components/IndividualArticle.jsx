import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../../apicalls";

const IndividualArticle = () => {
  const [article, setArticle] = useState({});
  const { article_id } = useParams();
  console.log("test");

  useEffect(() => {
    getArticleById(article_id).then((article) => {
      setArticle(article);
    });
  }, []);

  return (
    <div className="article-card">
      <h2>{article.title}</h2>
      <p>By: {article.author}</p>
      <img src={article.article_img_url} alt={article.topic} />
      <section>
        <p>{article.body}</p>
      </section>
      <aside>
        <p>Date Posted: {article.created_at}</p>
        <p>Number of Comments: {article.comment_count}</p>
        <p>Votes: {article.votes}</p>
      </aside>
    </div>
  );
};

export default IndividualArticle;
