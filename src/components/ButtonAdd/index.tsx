import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Container } from './styles';
import theme from '../../styles/theme';

const ButtonAdd: React.FC<RectButtonProps> = ({ ...rest }) => {
  return (
    <Container {...rest}>
      <MaterialCommunityIcons
        name="plus"
        color={theme.colors.heading}
        size={24}
      />
    </Container>
  );
};

export default ButtonAdd;
