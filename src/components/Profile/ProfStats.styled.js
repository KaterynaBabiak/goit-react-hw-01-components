import styled from 'styled-components';

export const Stats = styled.ul`
  display: flex;
  justify-content: center;
  width: 342px;
  outline: 1px solid gray;
  border-radius: 6px;
  margin-top: 16px;
`;

export const StatsItem = styled.li`
  width: 100%;
  margin: 4px 0 4px 0;
`;

export const Label = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  font-size: 20px;
  line-height: 1.36;

  &:hover {
    scale: 1.05;
  }
`;