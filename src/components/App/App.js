import { UserProfile } from 'components/UserProfile/UserProfile';
import user from '../../user.json';
import { Statistics } from 'components/Statistics/Statistics';
import data from '../../data.json';
import { FriendList } from 'components/FriendList/FriendList';
import friends from '../../friends.json';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory.styled';
import transactions from '../../transactions.json';

export const App = () => {
  return (
    <div>
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
    </div>
  );
};
