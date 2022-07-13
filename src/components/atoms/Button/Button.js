import React from "react";
import styled from "styled-components";
import { ReactComponent as DeleteIcon } from "assets/icons/delete-icon.svg";

const StyledButton = styled.button`
  width: 25px;
  height: 25px;
  background-color: ${({ theme: { colors } }) => colors.grey};
  border-radius: 50px;
  border: none;
  color: ${({ theme: { colors } }) => colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    width: 100%;
    height: 100%;
  }
`;

const Button = () => {
  return (
    <StyledButton>
      <DeleteIcon />
    </StyledButton>
  );
};

export default Button;
