import React from 'react';
import { TopicCard } from './TopicCard';
import { topicsList } from '../data/topicsList';

export const TopicGrid: React.FC = () => {
  const featuredTopics = topicsList.filter((topic) => topic.id !== 'home');

  const handleTopicClick = (topicId: string) => {
    // Later, this will route the user to /explore/[topicId]
    console.log(`Navigating to topic: ${topicId}`);
  };

  return (
    <div className="mx-auto w-full max-w-5xl">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
        {featuredTopics.map((topic) => (
          <TopicCard
            key={topic.id}
            title={topic.title}
            description={topic.description}
            icon={topic.icon}
            onClick={() => handleTopicClick(topic.id)}
          />
        ))}
      </div>
    </div>
  );
};