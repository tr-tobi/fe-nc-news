import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import { getAllArticles } from "../../utils/apicalls";
import SortBy from "./SortBy";

const ArticleList = ({ setSort, setOrder, order, sort }) => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <SortBy
        setArticles={setArticles}
        setOrder={setOrder}
        order={order}
        sort={sort}
        setSort={setSort}
        articles={articles}
      />
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
    </>
  );
};

export default ArticleList;
