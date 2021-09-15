import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.secondary90};
`;

export const ImageIllustration = styled.Image`
  width: 100%;
  height: ${RFValue(360)}px;
`;

export const Content = styled.View``;

export const Title = styled.Text``;
export const SubTitle = styled.Text``;
