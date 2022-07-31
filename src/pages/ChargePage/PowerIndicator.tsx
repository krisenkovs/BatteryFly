import { Box } from '@components/Box';
import { Typography } from '@components/Typography';
import { COLORS } from '@constants';
import { StyleSheet } from 'react-native';
import { PieChart } from 'react-native-svg-charts';

export const PowerIndicator = () => {
  const data = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  ];

  const pieData = data
    .filter((value) => value > 0)
    .map((value, index) => ({
      value,
      svg: {
        fill: COLORS.GREEN,
      },
      key: `pie-${index}`,
    }));

  return (
    <Box height={108} width={128}>
      <PieChart
        style={styles.diagram}
        data={pieData}
        startAngle={(-3 * Math.PI) / 4}
        endAngle={(3 * Math.PI) / 4}
        outerRadius={64}
        innerRadius={52}
      />
      <Box
        width={92}
        height={92}
        borderRadius={46}
        backgroundColor={COLORS.PALE_BLUE}
        style={styles.content}
        alignItems="center"
        justifyContent="center"
      >
        <Typography color={COLORS.BLACK} weight={800} size={24} lineHeight={30}>
          50
        </Typography>
        <Typography color={COLORS.LIGHT_BLACK} weight={500} size={12} lineHeight={15}>
          kW
        </Typography>
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  diagram: {
    width: 128,
    height: 128,
  },
  content: {
    position: 'absolute',
    left: 18,
    top: 18,
  },
});
