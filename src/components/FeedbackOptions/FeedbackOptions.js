import PropTypes from "prop-types";
import { List, Item, Btn} from "./FeedbackOptions.styles";

function FeedbackOptions({ options, onLeaveFeedback }) {
     return (
    <List>
      {options.map((option) => (
        <Item key={option}>
          <Btn onClick={()=> onLeaveFeedback(option)}>{option}</Btn>
        </Item>
      ))}
    </List>
  );
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;