import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const IndividualArticle = () => {
  const [article, setArticle] = useState({});
  const { article_id } = useParams();
  useEffect(() => {
    axios
      .get(`https://nc-news-g9x6.onrender.com/api/articles/${article_id}`)
      .then((response) => {
        setArticle(response.data.article);
      });
  }, []);

  return (
    <div className="article-card">
      <h2>{article.title}</h2>
      <p>By: {article.author}</p>
      <img src={article.article_img_url} alt={article.topic} />
      <aside>
        <p>Date Posted: {article.created_at}</p>
        <p>Number of Comments: {article.comment_count}</p>
        <p>Votes: {article.votes}</p>
      </aside>
    </div>
  );
};

export default IndividualArticle;
