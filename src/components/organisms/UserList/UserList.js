import React from "react";
import { users } from "data/users";
import UserListItem from "components/molecules/UserListItem/UserListItem";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: white;
  width: 100%;
  max-width: 500px;
  padding: 40px 30px;
  border-radius: 25px;
  box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
`;

const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const UserList = () => {
  return (
    <Wrapper>
      <StyledList>
        {users.map((user) => {
          return <UserListItem userData={user} />;
        })}
      </StyledList>
    </Wrapper>
  );
};

export default UserList;
