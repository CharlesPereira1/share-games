import React from 'react';
import { View } from 'react-native';
import Avatar from '../Avatar';

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
      <Avatar urlImage="https://github.com/charlespereira1.png" />

      <Wrapper>
        <User>
          <Greeting>Olá,</Greeting>
          <UserName>Charles</UserName>
        </User>

        <Message>Hoj é dia de vitória</Message>
      </Wrapper>
    </Container>
  );
};

export default Profile;
