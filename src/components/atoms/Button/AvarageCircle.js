import React from "react";
import styled from "styled-components";
const StyledCircle = styled.div`
  background-color: ${({ theme, average }) => {
    if (average > 4) return theme.colors.success;
    if (average > 3) return theme.colors.warning;
    if (average > 1) return theme.colors.error;
    return theme.colors.grey;
  }};
  width: 35px;
  height: 35px;
  border-radius: 50px;
  font-size: ${({ theme: { fontSize } }) => fontSize.s};
  font-weight: 700;
  color: ${({ theme: { colors } }) => colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AvarageCircle = ({ average }) => {
  return <StyledCircle average={average}>{average}</StyledCircle>;
};

export default AvarageCircle;
