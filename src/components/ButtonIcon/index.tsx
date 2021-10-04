import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import DiscordImg from '../../assets/discord.png';

import { Container, WrapperIcon, Icon } from './styles';

interface ButtoniconProps extends TouchableOpacityProps {
  title?: string;
}

const ButtonIcon: React.FC<ButtoniconProps> = ({ title, ...rest }) => {
  return (
    <Container {...rest}>
      <WrapperIcon>
        <Icon source={DiscordImg} />
      </WrapperIcon>
    </Container>
  );
};

export default ButtonIcon;
