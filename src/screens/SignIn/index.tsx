import React from 'react';
import { useNavigation } from '@react-navigation/native';

import IllustrationImg from '../../assets/illustration.png';
import ButtonIcon from '../../components/ButtonIcon';

import {
  Container,
  ImageIllustration,
  Content,
  Title,
  SubTitle,
} from './styles';

interface SignInProps {}

const SignIn: React.FC<SignInProps> = () => {
  const { navigate } = useNavigation();

  const handleSignIn = () => {
    navigate({ key: 'Home' });
  };

  return (
    <Container>
      <ImageIllustration source={IllustrationImg} resizeMode="stretch" />

      <Content>
        <Title>
          Conecte-se{`\n`}e organize suas{`\n`}
          facilmente
        </Title>

        <SubTitle>
          Crie grupos para jogar seus games{`\n`}
          favoritos com seus amigos
        </SubTitle>

        <ButtonIcon title="Entrar com Discord" onPress={handleSignIn} />
      </Content>
    </Container>
  );
};

export default SignIn;
