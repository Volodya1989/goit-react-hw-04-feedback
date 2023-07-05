// Separate named imports, this makes the code more readable
import { useState } from "react";
import Statistics from "../Statistics";
import FeedbackOptions from "../FeedbackOptions";
import Section from "../Section";
import Notification from "../Notification";
import { Container } from "components/App/App.styled";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleStateUpdate = (prevState) => prevState + 1;

  const handleOnClick = (e) => {
    const currentEl = e.currentTarget.name;
    switch (currentEl) {
      case "good":
        setGood(handleStateUpdate);
        break;
      
      case "neutral":
        setNeutral(handleStateUpdate);
        break;
      
      case "bad":
        setBad(handleStateUpdate);
        break;
      
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  const countPositiveFeedbackPercentage = () => {
    return `${Math.round((good / (good + neutral + bad)) * 100)} %`;
  };
  const options = ["good", "neutral", "bad"];

  const totalNumberOfFeedbacks = countTotalFeedback();
  const totalPercentageOfFeedbacks = countPositiveFeedbackPercentage();
  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={(e) => handleOnClick(e)}
        />
      </Section>
      <Section title="Statistics">
        {totalNumberOfFeedbacks ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalNumberOfFeedbacks}
            positiveFeedback={totalPercentageOfFeedbacks}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </Container>
  );
};

export default App;
