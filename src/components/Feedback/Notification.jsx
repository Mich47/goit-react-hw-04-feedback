import { PropTypes } from 'prop-types';
import { TextStyled } from './Feedback.styled';

export const Notification = ({ message }) => {
  return (
    <TextStyled fontWeight="bold" fontSize="m">
      {message}
    </TextStyled>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
