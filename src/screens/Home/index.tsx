import React from 'react';

import ButtonAdd from '../../components/ButtonAdd';
import Profile from '../../components/Profile';

import { Container, Header } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Header>
        <Profile />
        <ButtonAdd />
      </Header>
    </Container>
  );
};

export default Home;
