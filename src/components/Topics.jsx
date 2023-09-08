import { useEffect, useState } from "react";
import { getTopics } from "../../utils/apicalls";
import TopicCard from "./TopicCard";
import { useNavigate } from "react-router-dom";

const Topics = ({ topics, setTopics }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getTopics()
      .then((topic) => {
        setTopics(topic);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsError(true);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <h2>Topic does not exist</h2>;
  }
  return topics.map((topicElement) => {
    return (
      <TopicCard
        key={topicElement}
        topics={topics}
        topicElement={topicElement}
      />
    );
  });
};

export default Topics;
