import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";

const Label = ({ title }) => {
  return (
    <ContainerLabel>
      <TitleLabel>{title}</TitleLabel>
    </ContainerLabel>
  );
};

const ContainerLabel = styled.View`
  margin-vertical: 3px;
  background: #e4e4e4;
  padding: 4px;
  border-radius: 10px;
  align-items: center;
  flex-direction: row;
  align-self: flex-start;
`;

const TitleLabel = styled.Text`
  font-size: 12px;
`;

export default Label;
