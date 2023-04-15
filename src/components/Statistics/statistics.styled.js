import styled from 'styled-components';

export const StatsBody = styled.section`
  text-align: center;

  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.normal};
`;

export const StatsTitle = styled.h2`
  color: ${p => p.theme.colors.mainFont};
  padding: 20px;
`;

export const StatList = styled.ul`
  display: flex;
  overflow: hidden;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100px;
  height: 100px;

  background-color: ${p => p.color};
  color: ${p => p.theme.colors.white};
  text-shadow: ${p => `1px 1px 2px ${p.theme.colors.mainFont}`};
`;

export const StatLabel = styled.span``;

export const StatPercentage = styled.span``;
