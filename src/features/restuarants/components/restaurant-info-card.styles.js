import React, { Text, View } from "react";
import { styled } from "styled-components/native";

export const InfoDescription = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
  padding: ${(props) => props.theme.space[2]};
`;
export const Address = styled(Text)`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.ui.primary};
  padding: ${(props) => props.theme.space[2]};
`;
export const Info = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

export const ImageView = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

export const Rating = styled(View)`
  flex-direction: row;
  padding: ${(props) => props.theme.space[2]};
`;

export const OpenIcon = styled(View)`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

export const Section = styled(View)`
  flex-direction: row;
`;
export const SectionRight = styled(View)`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;
