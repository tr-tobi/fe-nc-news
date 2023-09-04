import { useEffect, useState } from "react";
import axios from "axios";
import ArticleCard from "./ArticleCard";

const ArticleList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get("https://nc-news-g9x6.onrender.com/api/articles")
      .then((response) => {
        setArticles(response.data.articles);
      });
  }, []);

  return articles.map(
    ({
      article_id,
      article_img_url,
      author,
      comment_count,
      created_at,
      title,
      topic,
      votes,
    }) => {
      return (
        <ArticleCard
          key={article_id}
          article_id={article_id}
          article_img_url={article_img_url}
          author={author}
          comment_count={comment_count}
          created_at={created_at}
          title={title}
          topic={topic}
          votes={votes}
        />
      );
    }
  );
};

export default ArticleList;
