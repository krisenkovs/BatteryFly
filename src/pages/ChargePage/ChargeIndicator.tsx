import { Box } from '@components/Box';
import { Typography } from '@components/Typography';
import { COLORS } from '@constants';
import { StyleSheet } from 'react-native';
import Svg, { Circle, Defs, LinearGradient, Stop } from 'react-native-svg';
import { ProgressCircle } from 'react-native-svg-charts';
import LightIcon from '../../icons/LightIcon';

type Props = {
  time?: number;
  color: COLORS;
  percent: number;
};

export const ChargeIndicator = ({ color, time, percent }: Props) => {
  return (
    <Box
      height={260}
      width={260}
      borderRadius={130}
      backgroundColor={COLORS.WHITE}
      paddingTop={10}
      paddingLeft={10}
      paddingRight={10}
      paddingBottom={10}
    >
      <Svg width="240" height="240" viewBox="0 0 240 240" fill="none">
        <Circle
          cx="120"
          cy="120"
          r="118.5"
          transform="rotate(-90 120 120)"
          stroke="url(#paint0_linear_14_202)"
          strokeWidth="3"
        />
        <Defs>
          <LinearGradient
            id="paint0_linear_14_202"
            x1="120"
            y1="7.62939e-06"
            x2="120"
            y2="240"
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#D2E4FF" />
            <Stop offset="1" stopColor={color} />
          </LinearGradient>
        </Defs>
      </Svg>

      <ProgressCircle
        strokeWidth={12}
        progress={percent / 100}
        progressColor={color}
        style={styles.diagram}
        backgroundColor={COLORS.PALE_BLUE}
      ></ProgressCircle>
      <Box
        width={176}
        height={176}
        borderRadius={88}
        style={styles.content}
        justifyContent="center"
        alignItems="center"
      >
        <LightIcon width={24} height={24} color={color} />
        <Box marginTop={12}>
          <Typography color={COLORS.BLACK} weight={800} size={48} lineHeight={48}>
            {`${percent}%`}
          </Typography>
        </Box>
        <Box marginTop={12}>
          <Typography color={COLORS.LIGHT_BLACK} weight={600} size={18} lineHeight={24}>
            {`${time} мин`}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  diagram: {
    position: 'absolute',
    left: 30,
    top: 30,
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  content: {
    position: 'absolute',
    left: 42,
    top: 42,
  },
});
