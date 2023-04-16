import PropTypes from 'prop-types';
import {
  StatItem,
  StatList,
  StatsBody,
  StatsTitle,
  StatPercentage,
  StatLabel,
} from './statistics.styled';
import { getRandomHexColor } from '../../Utils';

export const Statistics = ({ data, title }) => {
  return (
    <StatsBody>
      {title && <StatsTitle>{title}</StatsTitle>}

      <StatList>
        {data.map(({ id, label, percentage }) => (
          <StatItem key={id} color={getRandomHexColor()}>
            <StatLabel class="label">{label}</StatLabel>
            <StatPercentage class="percentage">{percentage}%</StatPercentage>
          </StatItem>
        ))}
      </StatList>
    </StatsBody>
  );
};

Statistics.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
  title: PropTypes.string.isRequired,
};
