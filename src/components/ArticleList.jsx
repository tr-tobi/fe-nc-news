import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import { getAllArticles } from "../../utils/apicalls";

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getAllArticles().then((articlesFromApi) => {
      setArticles(articlesFromApi);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

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
