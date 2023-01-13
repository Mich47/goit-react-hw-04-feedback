import { PropTypes } from 'prop-types';
import { Box } from 'components/Box';
import { TextStyled } from './Feedback.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <Box>
      <TextStyled>Good: {good}</TextStyled>
      <TextStyled>Neutral: {neutral}</TextStyled>
      <TextStyled>Bad: {bad}</TextStyled>
      <TextStyled>Total: {total}</TextStyled>
      <TextStyled>Positive feedback: {positivePercentage}%</TextStyled>
    </Box>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
