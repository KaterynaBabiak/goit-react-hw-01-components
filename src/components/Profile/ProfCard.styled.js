import styled from 'styled-components';

export const ProfileCard = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserName = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 24px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Text = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  font-size: 20px;
  color: gray;
  margin: 4px 0 4px 0;
`;

export const Avatar = styled.img`
  margin: 20px auto;
  width: 250px;
  border-radius: 50%;
  border: 1px solid gray;
  padding: 8px;
`;