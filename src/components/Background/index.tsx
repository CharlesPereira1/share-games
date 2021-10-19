import React from 'react';

import theme from '../../styles/theme';

import { Container } from './styles';

const Background: React.FC = ({ children }) => {
  const { secondary80, secondary100 } = theme.colors;

  return <Container colors={[secondary80, secondary100]}>{children}</Container>;
};

export default Background;
