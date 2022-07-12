import React from "react";
import { users } from "data/users";
import UserListItem from "components/UserListItem/UserListItem";
const UserList = () => {
  return (
    <div>
      <ul>
        {users.map((user) => {
          return <UserListItem userData={user} />;
        })}
      </ul>
    </div>
  );
};

export default UserList;
