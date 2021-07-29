import { useState } from "react";
import { Container, Notification } from "./App.styles";
import FeedbackOptions from "../components/FeedbackOptions";
import Section from "../components/Section";
import Statistics from "../components/Statistics";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = (feedback) => {
    switch (feedback) {
      case 'good':
        setGood((prevState) => prevState + 1)
        break

      case 'neutral':
        setNeutral((prevState) => prevState + 1)
        break

      case 'bad':
        setBad((prevState) => prevState + 1)
        break

      default:
        return
    }};

  const countTotal = () => {
    return good + neutral + bad;
  };

  const countPositivePercent = () => {
    const total = countTotal();
    return Math.round(good / total * 100);
  };

  const options = Object.keys({ good, neutral, bad });
  const total = countTotal();
  const positivePercent = countPositivePercent();
  
    return (
      <Container>
        <Section title={"Please leave feedback"}>
          <FeedbackOptions
            options={options}
            onLeaveFeedback={onLeaveFeedback}
          />
        </Section>
        <Section title={"Statistics"}>
          {total !== 0 ? <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={total}
                positivePercent={positivePercent} /> : <Notification>{"No feedback given"}</Notification>}
       </Section>
     </Container>
    );
  }


export default App;