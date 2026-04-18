import React from 'react';
import { TopicCard } from './TopicCard';
import { topicsList } from '../data/topicsList';

export const TopicGrid: React.FC = () => {
  const handleTopicClick = (topicId: string) => {
    // Later, this will route the user to /explore/[topicId]
    console.log(`Navigating to topic: ${topicId}`);
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {topicsList.map((topic) => (
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