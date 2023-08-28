import styled from 'styled-components';

export const Statwrapper = styled.div`
  width: 390px;
  background: whitesmoke;
  outline: 2px solid gray;
  border-radius: 6px;
  margin: 0 auto;
`;

export const Title = styled.h2`
  text-transform: uppercase;
  font-size: 20px;
  margin: 15px auto;
  text-align: center;
`;

export const StatList = styled.ul`
  display: flex;
  flex-direction: row;
  margin: 0px;
  padding: 0px 4px;
  gap: 8px;
`;

const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 6px;
  margin: 10px auto;
  font-size: 14px;
  font-weight: 600;
  padding:16px;
  gap: 8px
  justify-content: center;
  align-items: center;
   background-color: ${getRandomHexColor};

  &:hover {
    scale: 1.05;
  }
`;
