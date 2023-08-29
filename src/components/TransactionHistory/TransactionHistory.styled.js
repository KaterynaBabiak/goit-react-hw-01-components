import styled from 'styled-components';

export const TransactionTable = styled.table`
  border: 1px solid #e7e9fc;
  box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 2px 1px rgba(0, 0, 0, 0.08),
    0px 2px 2px rgba(0, 0, 0, 0.12);
  width: 390px;
  margin: 24px;
`;

export const TableHead = styled.thead`
  background-color: #6fdef4;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.36;
  color: #fff;
  text-transform: uppercase;
  height: 46px;
`;

export const TableBody = styled.tbody`
  width: 100%;
`;

export const TableRow = styled.tr`
  height: 40px;
  text-align: center;
  &:nth-child(even) {
    background-color: #f1f1f1;
}
`;



