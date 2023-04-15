import PropTypes from 'prop-types';
import {
  Avatar,
  Profile,
  ProfileDescription,
  DescriptionInfo,
  DesctiptionName,
  Stats,
  StatsLabel,
  StatsQuantity,
} from './UserProfile.styled';

export const UserProfile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Profile>
      <ProfileDescription>
        <Avatar src={avatar} alt="User avatar" width="100" />
        <DesctiptionName class="name">{username}</DesctiptionName>
        <DescriptionInfo class="tag">@{tag}</DescriptionInfo>
        <DescriptionInfo class="location">{location}</DescriptionInfo>
      </ProfileDescription>

      <Stats>
        <li>
          <StatsLabel class="label">Followers</StatsLabel>
          <StatsQuantity class="quantity">{stats.followers}</StatsQuantity>
        </li>
        <li>
          <StatsLabel class="label">Views</StatsLabel>
          <StatsQuantity class="quantity">{stats.views}</StatsQuantity>
        </li>
        <li>
          <StatsLabel class="label">Likes</StatsLabel>
          <StatsQuantity class="quantity">{stats.likes}</StatsQuantity>
        </li>
      </Stats>
    </Profile>
  );
};

UserProfile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
