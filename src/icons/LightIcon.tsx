import { COLORS } from '@constants';
import Svg, { Path } from 'react-native-svg';

type Props = {
  width?: number;
  height?: number;
  color?: COLORS;
};

export default function LightIcon({ width = 24, height = 24, color = COLORS.LIGHT_BLACK }: Props) {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M12.8889 2L4 14H12L11.1111 22L20 10H12L12.8889 2Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
