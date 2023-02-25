import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";

const positionVariant = {
  top: "marginTop",
  bottom: "marginBottom",
  left: "marginLeft",
  right: "marginRight",
};

const sizeVariantIndex = {
  small: 1,
  medium: 2,
  large: 3,
};
const getVariant = (position, size, theme) => {
  const property = positionVariant[position];
  const sizeIndex = sizeVariantIndex[size];
  const value = theme.space[sizeIndex];
  //   ex "marginLeft: 8px";
  console.log(`${property}:${value}`);
  return `${property}:${value}`;
};

//TODO: Fix Android crashing from getVariant loading
// const SpacerView = styled.View`
//   ${({ position, size, theme }) => getVariant(position, size, theme)}
// `;

// export const Spacer = (position, size, theme) => {

// }

export const Spacer = styled.View`
  ${({ position, size, theme }) => getVariant(position, size, theme)}
`;

Spacer.defaultProps = {
  position: "top",
  size: "small",
};
// const TopSmall = styled.View`
//   margin-top: 8px;
// `;

// const LeftSmall = styled.View`
//   margin-left: ${(props) => props.theme.space[2]};
// `;

// const LeftMedium = styled.View`
//   margin-left: ${(props) => props.theme.space[3]};
// `;

// export const Spacer = ({ variant }) => {
//   if (variant === "top-small") {
//     return <TopSmall />;
//   }

//   if (variant === "left-small") {
//     return <LeftSmall />;
//   }

//   if (variant === "left-medium") {
//     return <LeftMedium />;
//   }
// };
