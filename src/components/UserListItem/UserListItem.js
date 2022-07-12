import React from "react";
import PropTypes from "prop-types";
const UserListItem = ({ userData: { name, attendance = 0, average } }) => {
  return (
    <li>
      <div>{average}</div>
      <div>
        <p>{name}</p>
        <p>{attendance}</p>
      </div>

      <div>
        <button>X</button>
      </div>
    </li>
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
