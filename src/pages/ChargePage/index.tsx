import { Box } from '@components/Box';
import { BlueButton } from '@components/Button';
import { Modal } from '@components/Modal';
import { Typography } from '@components/Typography';
import { COLORS, ROUTES } from '@constants';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native';

import { NativeStackScreenProps } from 'react-native-screens/native-stack';
import { RootStackParamList } from '../../../App';
import CrossIcon from '../../icons/CrossIcon';
import { ChargeIndicator } from './ChargeIndicator';
import { PowerIndicator } from './PowerIndicator';

export default function ChargePage({ navigation }: NativeStackScreenProps<RootStackParamList>) {
  const [visible, setVisible] = useState(false);

  function handleCancel() {
    navigation.navigate(ROUTES.MAIN);
  }

  return (
    <>
      <Box flex={1} paddingBottom={48} overflow="hidden">
        <Box
          height={250}
          backgroundColor={COLORS.PALE_BLUE}
          borderBottomRightRadius={12}
          borderBottomLeftRadius={12}
          paddingTop={16}
        >
          <Box flexDirection="row" justifyContent="flex-end" paddingLeft={16} paddingRight={16}>
            <TouchableOpacity onPress={handleCancel}>
              <Box
                width={44}
                height={44}
                borderRadius={22}
                backgroundColor={COLORS.WHITE}
                alignItems="center"
                justifyContent="center"
              >
                <CrossIcon />
              </Box>
            </TouchableOpacity>
          </Box>
          <Box marginTop={22}>
            <Typography
              weight={800}
              size={24}
              lineHeight={30}
              color={COLORS.BLACK}
              textAlign="center"
            >
              Идёт зарядка батареи
            </Typography>
          </Box>
          <Box
            marginBottom={-130}
            height={260}
            marginTop={16}
            justifyContent="center"
            alignItems="center"
          >
            <ChargeIndicator color={COLORS.GREEN} percent={68} time={6} />
          </Box>
        </Box>
        <Box
          marginTop={146}
          paddingLeft={28}
          paddingRight={26}
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box width={72}>
            <Box flexDirection="row" justifyContent="center">
              <Typography weight={700} size={18} lineHeight={22} color={COLORS.BLACK}>
                34
              </Typography>
              <Typography weight={700} size={18} lineHeight={22} color={COLORS.LIGHT_BLACK}>
                /50
              </Typography>
            </Box>
            <Typography
              weight={700}
              size={12}
              lineHeight={15}
              color={COLORS.LIGHT_BLACK}
              textAlign="center"
            >
              kW*h
            </Typography>
          </Box>
          <PowerIndicator />
          <Box width={72}>
            <Typography
              weight={700}
              size={18}
              lineHeight={22}
              color={COLORS.BLACK}
              textAlign="center"
            >
              150
            </Typography>
            <Typography
              weight={700}
              size={12}
              lineHeight={15}
              color={COLORS.LIGHT_BLACK}
              textAlign="center"
            >
              BYN
            </Typography>
          </Box>
        </Box>
        <Box marginTop={24} paddingLeft={16} paddingRight={16}>
          <Typography
            weight={400}
            size={16}
            lineHeight={24}
            color={COLORS.LIGHT_BLACK}
            textAlign="center"
          >
            Выполняется зарядка, не отсоединяйте коннектор от авто
          </Typography>
        </Box>
        <Box marginTop={24} paddingLeft={16} paddingRight={16}>
          <TouchableOpacity onPress={() => setVisible(true)}>
            <Typography
              weight={700}
              size={16}
              lineHeight={20}
              color={COLORS.BLUE}
              textAlign="center"
            >
              Подробнее о заправке
            </Typography>
          </TouchableOpacity>
        </Box>
        <Box flex={1} />
        <BlueButton text="Остановить" />
      </Box>

      <Modal onClose={() => setVisible(false)} title="Информация о заправке" visible={visible} />
    </>
  );
}
