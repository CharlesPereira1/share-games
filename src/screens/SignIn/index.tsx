import React from "react";
import { Text } from "react-native";

import IllustrationImg from "../../assets/illustration.png";

import { Container, ImageIllustration } from "./styles";

interface SignInProps {}

const SignIn: React.FC<SignInProps> = () => {
  return (
    <Container>
      <ImageIllustration source={IllustrationImg} />
    </Container>
  );
};

export default SignIn;
