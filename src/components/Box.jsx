import styled from 'styled-components';
import {
  color,
  space,
  layout,
  flexbox,
  grid,
  background,
  border,
  position,
  typography,
  shadow,
} from 'styled-system';

export const Box = styled('div')(
  { gap: props => props.gap || '8px' },
  color,
  space,
  layout,
  flexbox,
  grid,
  background,
  border,
  position,
  typography,
  shadow
);
