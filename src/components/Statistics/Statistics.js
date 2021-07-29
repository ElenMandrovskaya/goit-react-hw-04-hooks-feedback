import PropTypes from "prop-types";
import { List, Item } from "./Statistics.styles";

function Statistics({ good, neutral, bad, total, positivePercent}) {
    return (
        <List>
            <Item>
                Good: {good}
            </Item>
            <Item>
                Neutral: {neutral}
            </Item>
            <Item>
                Bad: {bad}
           </Item>
            <Item>
               Total: {total}
            </Item>
            <Item>
                Positive: {positivePercent} %
            </Item>
        </List>
    );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercent: PropTypes.number.isRequired,
};

export default Statistics;