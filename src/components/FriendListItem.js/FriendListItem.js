import PropTypes from "prop-types";
import s from "./FriendListItem.module.css";

function FriendListItem({ avatar, name, isOnline, id }) {
  return (
    <div className={s.item}>
      <li key={id}>
        <span className={`${s.status} ${isOnline ? s.online : s.offline}`}>
          {isOnline}
        </span>
        <img className={s.avatar} src={avatar} alt={name} width="48" />
        <p>{name}</p>
      </li>
    </div>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
