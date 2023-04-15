import styled from 'styled-components';

export const Profile = styled.div`
  width: 300px;
  margin: 50px;

  background-color: #ffffff;

  border: ${p => p.theme.borders.normal + p.theme.colors.darkGrey};
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: ${p => `2px 2px 11px 5px ${p.theme.colors.darkGrey}`};

  :hover,
  :focus {
    box-shadow: ${p => `2px 2px 11px 10px ${p.theme.colors.darkGrey}`};
  }
`;

export const ProfileDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 20px;
`;
export const Avatar = styled.img`
  border-radius: 50%;

  margin-bottom: 20px;
`;

export const DescriptionInfo = styled.p`
  margin-bottom: 10px;

  color: ${p => p.theme.colors.secondaryFont};
`;

export const DesctiptionName = styled.p`
  margin-bottom: 10px;

  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.mainFont};
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: space-around;

  background-color: ${p => p.theme.colors.grey};

  li {
    width: calc(100% / 3);
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    border: ${p => p.theme.borders.normal + p.theme.colors.darkGrey};
    padding: 20px;
  }
`;

export const StatsLabel = styled.span`
  color: ${p => p.theme.colors.secondaryFont};
  margin-bottom: 10px;
`;

export const StatsQuantity = styled.span`
  color: ${p => p.theme.colors.mainFont};
  font-weight: ${p => p.theme.fontWeights.bold};
`;
