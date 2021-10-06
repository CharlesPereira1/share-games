import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import DiscordImg from '../../assets/discord.png';

import { Container, WrapperIcon, Icon, Title } from './styles';

interface ButtoniconProps extends TouchableOpacityProps {
  title?: string;
}

const ButtonIcon: React.FC<ButtoniconProps> = ({ title, ...rest }) => {
  return (
    <Container {...rest} activeOpacity={0.7}>
      <WrapperIcon>
        <Icon source={DiscordImg} />
      </WrapperIcon>
      <Title>{title}</Title>
    </Container>
  );
};

export default ButtonIcon;
