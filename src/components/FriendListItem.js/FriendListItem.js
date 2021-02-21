import PropTypes from 'prop-types'
import s from './FriendListItem.module.css'

function FriendListItem({ avatar, name, isOnline }) {
   return (<div className={s.item}>
        <span className={`${s.status} ${isOnline ? s.online : s.offline}`}>{isOnline}</span>
        <img className="avatar" src={avatar} alt={name} width="48" />
        <p className="name">{name}</p>
    </div>)
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}

export default FriendListItem