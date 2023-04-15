import { UserProfile } from 'components/UserProfile/UserProfile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
import { Layout } from 'Layout/Layout';
import user from '../../user.json';
import data from '../../data.json';
import friends from '../../friends.json';
import transactions from '../../transactions.json';
import { GlobalStyle } from 'Theme/GlobalStyles';
import { Theme } from 'Theme/Theme';

export const App = () => {
  return (
    <Theme>
      <Layout>
        <UserProfile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <Statistics title={'Upload stats'} data={data} />
        <FriendList friends={friends} />
        <TransactionHistory transactions={transactions} />
        <GlobalStyle />
      </Layout>
    </Theme>
  );
};
