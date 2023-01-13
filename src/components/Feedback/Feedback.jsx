import { PropTypes } from 'prop-types';
import { Box } from 'components/Box';
import { ButtonStyled } from './Feedback.styled';

const containerStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '16px',
};

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Box {...containerStyles}>
      {options.map(item => (
        <ButtonStyled
          key={item}
          type="button"
          name={item}
          onClick={onLeaveFeedback}
        >
          {item}
        </ButtonStyled>
      ))}
    </Box>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
