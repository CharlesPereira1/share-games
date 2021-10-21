import React from 'react';
import { View } from 'react-native';

import {
  Container,
  Wrapper,
  User,
  Greeting,
  UserName,
  Message,
} from './styles';

const Profile: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <User>
          <Greeting>Olá,</Greeting>
          <UserName>Chares</UserName>
        </User>

        <Message>Hoj é dia de vitória</Message>
      </Wrapper>
    </Container>
  );
};

export default Profile;
