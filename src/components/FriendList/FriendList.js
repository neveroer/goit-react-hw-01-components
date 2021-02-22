import PropTypes from "prop-types";
import FriendListItem from "../FriendListItem.js";

function FriendList({ friends }) {
  return (
    <div>
      <ul className="friend-list">
        {friends.map(({ name, avatar, isOnline, id }) => (
          <li key={id} className="item">
            <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
          </li>
        ))}
      </ul>
    </div>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};

export default FriendList;
