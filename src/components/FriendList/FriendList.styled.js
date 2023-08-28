import styled from 'styled-components';

export const Friendwrapper = styled.div`

`;

export const FriendsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-content: center;
  margin-left: 0;
`;

export const FriendItem = styled.li`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
  width: 390px;
  padding: 4px 24px;
  margin: 0 auto;
  background-color: whitesmoke;
  outline: 2px solid gray;
  border-radius: 6px;
  transition: 200ms ease;
  &:hover {
    scale: 1.05;
  }
`;

export const Status = styled.span`
  display: flex;width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => (props.status === 'true' ? 'green' : 'red')};  
`;

export const Avatar = styled.img`
  display: block;
  width: 48px;
  height: auto;
`;

export const Name = styled.p`
  display: inline-block;
  font-size: 16px;
`;