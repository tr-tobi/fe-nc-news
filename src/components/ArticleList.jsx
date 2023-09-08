import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import { getAllArticles } from "../../utils/apicalls";
import SortBy from "./SortBy";
import { useNavigate, useParams } from "react-router-dom";

const ArticleList = ({ setSort, setOrder, order, sort }) => {
  const [articles, setArticles] = useState([]);
  const { topic } = useParams();

  if (
    !["coding", "football", "cooking"].includes(topic) &&
    topic !== undefined
  ) {
    return <h2>Topic does not exist</h2>;
  }

  return (
    <>
      <div className="sort">
        <SortBy
          setArticles={setArticles}
          setOrder={setOrder}
          order={order}
          sort={sort}
          setSort={setSort}
          articles={articles}
        />
      </div>

      <div className="grid">
        {articles.map(
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
        )}
      </div>
    </>
  );
};

export default ArticleList;
