import { useEffect, useState } from "react";
import { getTopics } from "../../utils/apicalls";
import TopicCard from "./TopicCard";

const Topics = () => {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getTopics().then((topic) => {
      setTopics(topic);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return topics.map((topic) => {
    return <TopicCard key={topic} topic={topic} />;
  });
};

export default Topics;
