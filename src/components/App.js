import { Profile } from "./Profile/Profile";
import user from './Profile/user.json';

import { Statistics } from "./Statistics/Statistics";
import data from './Statistics/data.json';

import { FriendList } from "./FriendList/FriendList";
import friends from './FriendList/friends.json';

import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import transactions from './TransactionHistory/transactions.json'

import { GlobalStyle } from "./Globalstyle";

export const App = () => {
  return (
    <>
      <Profile user={user} />
      <Statistics title="upload stats" items={data} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
      <GlobalStyle />
    </>
  );
};
