import { Box } from '@components/Box';
import { Typography } from '@components/Typography';
import { COLORS } from '@constants';
import { Pressable, StyleSheet } from 'react-native';
import CSSConnector from '../../icons/CSSConnector';

type Props = {
  onPress: () => void;
};

export function Connector({ onPress }: Props) {
  return (
    <Pressable onPress={onPress}>
      <Box
        borderRadius={8}
        paddingTop={24}
        paddingBottom={24}
        paddingRight={12}
        paddingLeft={12}
        style={styles.container}
        flexDirection="row"
      >
        <Box width={40} height={40} borderRadius={20} backgroundColor={COLORS.BLACK} />
        <Box
          width={40}
          height={40}
          borderRadius={20}
          backgroundColor={COLORS.PALE_BLUE}
          marginLeft={-14}
          alignItems="center"
          justifyContent="center"
        >
          <CSSConnector width={24} height={24} />
        </Box>
        <Box marginLeft={30} flex={1}>
          <Typography color={COLORS.BLACK} weight={700} size={14} lineHeight={18}>
            Разъем CCS
          </Typography>
          <Box marginTop={8}>
            <Typography color={COLORS.GREEN} weight={500} size={12} lineHeight={15}>
              ЗС доступна
            </Typography>
          </Box>
        </Box>
        <Box marginLeft={30}>
          <Typography
            color={COLORS.LIGHT_BLACK}
            weight={500}
            size={12}
            lineHeight={15}
            textAlign="right"
          >
            138kW
          </Typography>
          <Box marginTop={8}>
            <Typography
              color={COLORS.LIGHT_BLACK}
              weight={500}
              size={12}
              lineHeight={15}
              textAlign="right"
            >
              Быстрая зарядка
            </Typography>
          </Box>
        </Box>
      </Box>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: COLORS.GREY,
  },
});
