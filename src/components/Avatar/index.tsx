import React from 'react';

import theme from '../../styles/theme';

import { Container, Image } from './styles';

interface AvatarProps {
  urlImage: string;
}

const Avatar: React.FC<AvatarProps> = ({ urlImage }) => {
  const { secondary50, secondary70 } = theme.colors;

  return (
    <Container colors={[secondary50, secondary70]}>
      <Image source={{ uri: urlImage }} />
    </Container>
  );
};

export default Avatar;
