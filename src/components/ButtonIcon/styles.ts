import styled from 'styled-components/native';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: ${RFValue(56)}px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 8px;

  flex-direction: row;
  align-items: center;
`;

export const WrapperIcon = styled.View`
  width: 56px;
  height: 56px;
  justify-content: center;
  align-items: center;
  border-right-width: 1px;
  border-color: ${({ theme }) => theme.colors.line};
`;

export const Icon = styled.Image`
  width: 24px;
  height: 18px;
`;

export const Title = styled.Text`
  flex: 1;
  color: ${({ theme }) => theme.colors.heading};
  font-size: ${({ theme }) => theme.size.size15};
  text-align: center;
`;
