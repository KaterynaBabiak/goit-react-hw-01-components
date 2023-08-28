import styled from 'styled-components';

export const ProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 390px;
  border: 1px solid #303030;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
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
  margin: 4px 0 4px 0;
`;

export const Avatar = styled.img`
  margin: 20px auto;
  width: 250px;
  border-radius: 50%;
  border: 1px solid #303030;
  padding: 8px;
`;