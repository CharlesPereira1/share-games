import React from 'react';

import DiscordImg from '../../assets/discord.png';

import { Container, WrapperIcon, Icon } from './styles';

const ButtonIcon: React.FC = () => {
  return (
    <Container>
      <WrapperIcon>
        <Icon source={DiscordImg} />
      </WrapperIcon>
    </Container>
  );
};

export default ButtonIcon;
