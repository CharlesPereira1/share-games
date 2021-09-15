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

export const Content = styled.View`
  margin-top: -${RFValue(40)}px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.heading};
  text-align: center;
  font-size: ${({ theme }) => theme.size.size40};
  margin-bottom: ${({ theme }) => theme.size.size16};
`;

export const SubTitle = styled.Text`
  color: ${({ theme }) => theme.colors.heading};
  text-align: center;
  font-size: ${({ theme }) => theme.size.size15};
  margin-bottom: ${({ theme }) => theme.size.size64};
`;
