import { ProfileCard, Avatar, UserName, Text } from './ProfCard.styled';
import PropTypes from 'prop-types';

export const ProfCard = ({ avatar, username, tag, location }) => {
  return (
    <ProfileCard>
      <Avatar src={avatar} alt="User avatar" />
      <UserName>{username}</UserName>
      <Text>@{tag}</Text>
      <Text>{location}</Text>
    </ProfileCard>
  );
};

ProfCard.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};