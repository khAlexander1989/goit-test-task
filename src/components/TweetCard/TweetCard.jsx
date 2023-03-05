import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

import localStorageAPI from 'utils/localeStorageAPI';
import addDigitGroupDivider from 'utils/addDigitGroupDevider';

import logo from '../../images/Logo.png';
import noPhoto from '../../images/noPhoto.jpg';
import * as styled from './TweetCard.styled';

function TweetCard({ user, onRemoveFollower, onAddFollower }) {
  const LS_DATA_KEY = `isFollowingUserWithId_${user.id} `;
  const [isFollowing, setIsFollowing] = useState(() => {
    const serializedIsFollowing =
      localStorageAPI.getDataFromLocalStorage(LS_DATA_KEY);

    return serializedIsFollowing
      ? localStorageAPI.deserializeData(serializedIsFollowing)
      : false;
  });

  const formattedFollowers = addDigitGroupDivider(user.followers, 3);
  const formattedTweets = addDigitGroupDivider(user.tweets, 3);

  useEffect(() => {
    localStorageAPI.addDataToLocalStorage(
      LS_DATA_KEY,
      localStorageAPI.serializeData(isFollowing)
    );
  }, [isFollowing, LS_DATA_KEY]);

  function toggleFollow() {
    setIsFollowing(prevState => !prevState);
    if (isFollowing) {
      onRemoveFollower(user.id);
    } else {
      onAddFollower(user.id);
    }
  }

  return (
    <styled.Container>
      <styled.Logo src={logo} alt="company-logo" width="76px" />
      <styled.UserInfoContainer>
        <styled.AvatarFrame>
          <styled.AvatarContainer>
            <styled.Avatar
              src={user.avatarURL || noPhoto}
              alt={`${user.user} avatar`}
              width="64px"
              height="64px"
            />
          </styled.AvatarContainer>
        </styled.AvatarFrame>
        <styled.Typography>{`${formattedTweets} TWEETS`}</styled.Typography>
        <styled.Typography>{`${formattedFollowers} FOLLOWERS`}</styled.Typography>
        <styled.FollowBtn onClick={toggleFollow} active={isFollowing}>
          {isFollowing ? 'FOLLOWING' : 'FOLLOW'}
        </styled.FollowBtn>
      </styled.UserInfoContainer>
    </styled.Container>
  );
}

TweetCard.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    user: PropTypes.string.isRequired,
    avatarURL: PropTypes.string,
    tweets: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
  }),
  onRemoveFollower: PropTypes.func.isRequired,
  onAddFollower: PropTypes.func.isRequired,
};

export default TweetCard;
