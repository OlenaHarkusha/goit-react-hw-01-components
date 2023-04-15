import styled from 'styled-components';

export const Friend = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;

  padding: 10px;

  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.large};
  box-shadow: ${p => `2px 2px 11px 5px ${p.theme.colors.darkGrey}`};
`;

export const Status = styled.span`
  display: block;
  width: 10px;
  height: 10px;
  background-color: ${p =>
    p.status ? p.theme.colors.green : p.theme.colors.red};
  border-radius: ${p => p.theme.radii.round};
`;

export const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: ${p => p.theme.radii.large};
`;

export const Name = styled.p`
  font-size: ${p => p.theme.fontSizes.l};
`;
