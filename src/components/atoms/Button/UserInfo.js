import React from "react";
import styled from "styled-components";

const Wraper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 25px 20px;
  p {
    margin: 0;
    color: ${({ theme: { colors } }) => colors.darkGrey};
    margin-bottom: 1px;
  }
`;

const StyledFirstP = styled.p`
  font-weight: 700;
`;
const UserInfo = ({ name, attendance }) => {
  return (
    <Wraper>
      <StyledFirstP>{name}</StyledFirstP>
      <p>attendance: {attendance}</p>
    </Wraper>
  );
};

export default UserInfo;
