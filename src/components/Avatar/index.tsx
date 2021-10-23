import React from 'react';

import theme from '../../styles/theme';

import { Container, Image } from './styles';

interface AvatarProps {
  urlImage: string;
}

const Avatar: React.FC<AvatarProps> = ({ urlImage }) => {
  const { secondary80, secondary100 } = theme.colors;

  return (
    <Container colors={[secondary80, secondary100]}>
      <Image source={{ uri: urlImage }} />
    </Container>
  );
};

export default Avatar;
