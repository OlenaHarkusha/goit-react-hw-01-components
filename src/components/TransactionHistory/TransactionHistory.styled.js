import styled from 'styled-components';

export const TransactionsTable = styled.table`
  width: 900px;
  background-color: ${p => p.theme.colors.white};
  text-align: center;
  border-collapse: collapse;
  border: ${p => p.theme.borders.normal + p.theme.colors.grey};
  color: ${p => p.theme.colors.mainFont};
`;

export const TableHead = styled.thead`
  background-color: ${p => p.theme.colors.blue};
  color: ${p => p.theme.colors.white};
`;

export const TableRow = styled.tr`
  height: 30px;

  th {
    border: ${p => p.theme.borders.normal + p.theme.colors.grey};
  }

  td {
    border: ${p => p.theme.borders.normal + p.theme.colors.darkGrey};
  }

  :nth-child(2n) {
    background-color: ${p => p.theme.colors.grey};
  }
`;
