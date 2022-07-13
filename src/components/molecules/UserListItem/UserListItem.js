import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Button from "components/atoms/Button/Button";
import AvarageCircle from "components/atoms/Button/AvarageCircle";
import UserInfo from "components/atoms/Button/UserInfo";
const Wrapper = styled.li`
  display: flex;
  align-items: center;
  position: relative;

  &:not(:last-child)::after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: ${({ theme: { colors } }) => colors.lightGrey};
  }
`;

const UserListItem = ({ userData: { name, attendance = 0, average } }) => {
  return (
    <Wrapper>
      <AvarageCircle average={average} />
      <UserInfo name={name} attendance={attendance} />
      <Button />
    </Wrapper>
  );
};

UserListItem.propTypes = {
  userData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
    average: PropTypes.string.isRequired,
  }),
};
export default UserListItem;
