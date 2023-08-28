import { Friendwrapper, FriendsList, FriendItem, Status, Avatar, Name } from './FriendList.styled'

export const FriendList = ({ friends }) => {
    return (
        <Friendwrapper>
            <FriendsList>
            {friends.map((friend) => (
                <FriendItem key={friend.id}>
                    <Status status={friend.isOnline.toString()}/>
                    <Avatar src={friend.avatar} alt={friend.name} />
                    <Name>{friend.name}</Name>
                </FriendItem>
            ))}
            </FriendsList>
        </Friendwrapper>
        
    )

};