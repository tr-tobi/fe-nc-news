import { getAllArticles } from "../../utils/apicalls";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SortBy = ({ setSort, setOrder, setArticles, sort, order, articles }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSort = (event) => {
    event.preventDefault();
    setSort(event.target.value);
  };

  const handleOrder = (event) => {
    event.preventDefault();
    setOrder(event.target.value);
  };

  const handleSelect = (event) => {
    event.preventDefault();
  };
  useEffect(() => {
    setIsLoading(true);
    getAllArticles(sort, order).then((articlesFromApi) => {
      setArticles(articlesFromApi);
      setIsLoading(false);
    });
  }, [sort, order]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <p>Filter by:</p>
      <Link
        to={`?sort_by=${sort ? sort : "created_at"}&order=${
          order ? order : "desc"
        }`}
      >
        <select
          onSelect={handleSelect}
          onChange={handleSort}
          name="sort"
          id="sort"
        >
          <option selected={sort === "created_at"} value="created_at">
            Date Posted
          </option>
          <option selected={sort === "title"} value="title">
            Title
          </option>
          <option selected={sort === "author"} value="author">
            Author
          </option>
        </select>
        <select
          onSelect={handleSelect}
          onChange={handleOrder}
          name="order"
          id="order"
        >
          <option selected={order === "desc"} value="desc">
            Descending
          </option>
          <option selected={order === "asc"} value="asc">
            Ascending
          </option>
        </select>
      </Link>
    </>
  );
};

export default SortBy;
