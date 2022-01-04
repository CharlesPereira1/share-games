import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  height: ${RFValue(48)}px;
  width: ${RFValue(48)}px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${RFValue(8)}px;
  align-items: center;
  justify-content: center;
`;

/* export const Wrapper = styled.View``;

export const User = styled.View`
  flex-direction: row;
`; */

// export const Greeting = styled.Text`
//   font-family: ${({ theme }) => theme.fonts.title500};
//   font-size: ${RFValue(24)}px;
//   color: ${({ theme }) => theme.colors.heading};
//   margin-right: 5;
// `;

// export const UserName = styled.Text`
//   font-family: ${({ theme }) => theme.fonts.title700};
//   font-size: ${RFValue(24)}px;
//   color: ${({ theme }) => theme.colors.heading};
// `;

// export const Message = styled.Text`
//   font-family: ${({ theme }) => theme.fonts.text400};
//   /* font-size: ${RFValue(24)}px; */
//   color: ${({ theme }) => theme.colors.highlight};
// `;
