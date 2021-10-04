import styled from 'styled-components/native';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';

export const Container = styled.TouchableOpacity`
  width: ${RFPercentage(100)};
  height: ${RFValue(56)}px;
  background-color: ${({ theme }) => theme.colors.primary};

  flex-direction: row;
  align-items: center;
`;

export const WrapperIcon = styled.View``;

export const Icon = styled.Image``;
