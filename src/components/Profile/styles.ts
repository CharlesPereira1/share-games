import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
`;

export const Wrapper = styled.View``;

export const User = styled.View`
  flex-direction: row;
`;

export const Greeting = styled.Text`
  font-family: ${({ theme }) => theme.fonts.title500};
  font-size: ${RFValue(24)}px;
  color: ${({ theme }) => theme.colors.heading};
  margin-right: 5;
`;

export const UserName = styled.Text``;

export const Message = styled.Text``;
