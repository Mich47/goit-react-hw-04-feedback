import { PropTypes } from 'prop-types';
import { Box } from 'components/Box';
import { TitleStyled } from './Feedback.styled';

const sectionStyles = {
  fontFamily: 'body',
  width: 'section',
  mx: 'auto',
  mt: '20px',
  p: [4],
  bg: 'white',
  border: ' 1px solid',
  borderColor: 'border',
  borderRadius: 'normal',
  boxShadow: 'main',
  as: 'section',
};

export const Section = ({ title, children }) => {
  return (
    <Box {...sectionStyles}>
      <TitleStyled>{title}</TitleStyled>
      {children}
    </Box>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element,
};
