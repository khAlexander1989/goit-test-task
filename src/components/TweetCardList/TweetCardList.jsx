import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

import localStorageAPI from 'utils/localeStorageAPI';
import TweetCard from 'components/TweetCard';
import * as styled from './TweetCardList.styled';

function TweetCardList({ data }) {
  const LS_DATA_KEY = 'users';
  const [users, setUsers] = useState(() => {
    const serializedUsers =
      localStorageAPI.getDataFromLocalStorage(LS_DATA_KEY);

    return serializedUsers
      ? localStorageAPI.deserializeData(serializedUsers)
      : data;
  });

  useEffect(() => {
    localStorageAPI.addDataToLocalStorage(
      LS_DATA_KEY,
      localStorageAPI.serializeData(users)
    );
  }, [users]);

  function addFolower(userId) {
    setUsers(prevState =>
      [...prevState].map(user =>
        userId === user.id ? { ...user, followers: user.followers + 1 } : user
      )
    );
  }

  function removeFolower(userId) {
    setUsers(prevState =>
      [...prevState].map(user =>
        userId === user.id ? { ...user, followers: user.followers - 1 } : user
      )
    );
  }

  return (
    <styled.List>
      {users.map(user => (
        <styled.Item key={user.id}>
          <TweetCard
            user={user}
            onRemoveFollower={removeFolower}
            onAddFollower={addFolower}
          />
        </styled.Item>
      ))}
    </styled.List>
  );
}

TweetCardList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      user: PropTypes.string.isRequired,
      avatarURL: PropTypes.string,
      tweets: PropTypes.number.isRequired,
      followers: PropTypes.number.isRequired,
    })
  ),
};

export default TweetCardList;
