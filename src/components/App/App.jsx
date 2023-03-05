import TweetCardList from '../TweetCardList';

import * as styled from './App.styled';
import users from '../../mockDB/users';

function App() {
  return (
    <styled.MainContainer>
      <TweetCardList data={users} />
    </styled.MainContainer>
  );
}

export default App;
