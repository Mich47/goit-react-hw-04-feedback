import { useState } from 'react';
import { Section } from './Feedback/Section';
import { FeedbackOptions } from './Feedback';
import { Statistics } from './Feedback/Statistics';
import { Notification } from './Feedback/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedbacks = { good, neutral, bad };
  const totalFeedbacks = Object.values(feedbacks).reduce(
    (total, item) => total + item,
    0
  );
  const feedbackKeyMap = Object.keys(feedbacks);
  const positivePercentage = Math.round((good / totalFeedbacks) * 100);

  const handleLeaveFeedback = event => {
    const { name } = event.target;
    switch (name) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;

      default:
        break;
    }
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={feedbackKeyMap}
          onLeaveFeedback={handleLeaveFeedback}
        ></FeedbackOptions>
      </Section>

      <Section title="Statistics">
        {totalFeedbacks ? (
          <Statistics
            feedbacks={feedbacks}
            total={totalFeedbacks}
            positivePercentage={positivePercentage}
          ></Statistics>
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </Section>
    </>
  );
};
