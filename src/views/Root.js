import React from "react";
import UserList from "components/organisms/UserList/UserList";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "assets/styles/theme";
import { GlobalStyle } from "assets/styles/GlobalStyle";
const Wrapper = styled.div`
  background-color: ${({ theme: { colors } }) => colors.lightGrey};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <UserList />
      </Wrapper>
    </ThemeProvider>
  );
};

export default Root;
