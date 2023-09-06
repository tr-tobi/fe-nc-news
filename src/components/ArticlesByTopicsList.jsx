import { useParams } from "react-router-dom";
import { getArticleByTopic } from "../../utils/apicalls";
import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";

const ArticlesByTopicList = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { topic } = useParams();
  useEffect(() => {
    setIsLoading(true);
    getArticleByTopic(topic).then((articles) => {
      setArticles(articles);
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

export default ArticlesByTopicList;
