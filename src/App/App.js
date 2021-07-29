import React, { Component } from "react";
import { Container, Notification } from "./App.styles";
import FeedbackOptions from "../components/FeedbackOptions";
import Section from "../components/Section";
import Statistics from "../components/Statistics";

class App extends Component {
  state = {
  good: 0,
  neutral: 0,
  bad: 0,
  }
  onLeaveFeedback = (feedback) => {
    this.setState(PrevState => ({
      [feedback]: PrevState[feedback] + 1,
    }));
  }
   countTotal = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositivePercent = () => {
    const { good } = this.state;
    const total = this.countTotal();
    return Math.round(good/total*100);
  }

  render() {
    const options = Object.keys(this.state);
    const { good, neutral, bad } = this.state;
    const total = this.countTotal();
    const positivePercent = this.countPositivePercent();

    return (
      <Container>
        <Section title={"Please leave feedback"}>
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.onLeaveFeedback} />
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
}

export default App;