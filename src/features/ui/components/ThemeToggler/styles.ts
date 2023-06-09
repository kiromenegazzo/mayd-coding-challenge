import styled from 'styled-components';

import { lightTheme, media } from '@features/ui/assets/styles';
import { MoonOutlineIcon } from '@features/ui/components/Icon';
import { Typography, getTypographySize } from '@features/ui/components/Typography';
import { filterTheme } from '@features/ui/utils/styles';

export const Toggler = styled.button
  .attrs({ type: 'button' })`
  display: flex;
  gap: 8px;
  align-items: center;
  border: none;  
  background-color: transparent;
  cursor: pointer;
`;

export const MoonIcon = styled(MoonOutlineIcon)
  .withConfig({
    shouldForwardProp: filterTheme,
  })`
  width: 20px;
  height: 20px;
  color: ${({ theme }) => theme.text};
`;

MoonIcon.defaultProps = {
  theme: lightTheme,
};

export const Text = styled(Typography)
  .attrs({ type: 'p2', tag: 'span' })`

  ${media.tablet`
    font-size: ${getTypographySize()}px;
  `}
`;
