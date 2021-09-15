import React from 'react';
import { Text } from 'react-native';

import IllustrationImg from '../../assets/illustration.png';

import {
  Container,
  ImageIllustration,
  Content,
  Title,
  SubTitle,
} from './styles';

interface SignInProps {}

const SignIn: React.FC<SignInProps> = () => {
  return (
    <Container>
      <ImageIllustration source={IllustrationImg} resizeMode="stretch" />

      <Content>
        <Title>
          Organize{`\n`}
          suas jogatinas{`\n`}
          facilmente
        </Title>

        <SubTitle>
          Crie grupos para jogar seus games{`\n`}
          favoritos com seus amigos
        </SubTitle>
      </Content>
    </Container>
  );
};

export default SignIn;
