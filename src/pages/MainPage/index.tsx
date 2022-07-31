import { Dimensions, ImageBackground, StatusBar, StyleSheet, TouchableOpacity } from 'react-native';

import { NativeStackScreenProps } from 'react-native-screens/native-stack';
import { RootStackParamList } from '../../../App';
import { BellIcon } from '@icons';
// @ts-ignore
import Waves from '../../../assets/Waves.png';
import BatteryFly from '../../images/BatteryFly';
import { StationsSheet } from './StationsSheet';
import { useState } from 'react';
import { Box } from '@components/Box';
import { COLORS, ROUTES } from '@constants';
import { Typography } from '@components/Typography';

export default function MainPage({ navigation }: NativeStackScreenProps<RootStackParamList>) {
  const [height, setHeight] = useState(0);

  function handleScannerPress() {
    navigation.navigate(ROUTES.SCANNER);
  }

  return (
    <>
      <StatusBar backgroundColor={COLORS.WHITE} barStyle="dark-content" />
      <Box flex={1} height={Dimensions.get('screen').height}>
        <Box
          paddingLeft={16}
          paddingRight={16}
          paddingTop={24}
          paddingBottom={24}
          alignItems="center"
          flexDirection="row"
        >
          <Box
            width={48}
            height={48}
            borderRadius={24}
            justifyContent="center"
            alignItems="center"
            backgroundColor={COLORS.PALE_BLUE}
          >
            <Typography weight={700} size={18} lineHeight={18} color={COLORS.BLUE}>
              A
            </Typography>
          </Box>
          <Box marginLeft={12} flex={1} flexDirection="column">
            <Typography weight={800} size={20} lineHeight={25} color={COLORS.BLACK}>
              Гость
            </Typography>
            <Typography weight={400} size={12} lineHeight={15} color={COLORS.LIGHT_BLACK}>
              Добро пожаловать
            </Typography>
          </Box>
          <BellIcon width={32} height={32} />
        </Box>
        <Box marginTop={110} height={188}>
          <ImageBackground source={Waves} resizeMethod="auto" style={{ flexDirection: 'row' }}>
            <Box flex={1} />
            <TouchableOpacity style={styles.scannerButton} onPress={handleScannerPress}>
              <BatteryFly />
            </TouchableOpacity>
            <Box flex={1} />
          </ImageBackground>
        </Box>
        <Box marginTop={44} paddingLeft={16} paddingRight={16}>
          <Typography
            weight={400}
            size={16}
            lineHeight={24}
            color={COLORS.BLACK}
            textAlign="center"
          >
            Отсконируйте QR код на заправочной станции
          </Typography>
        </Box>
        <Box
          height={1}
          marginTop={40}
          onLayout={(e) => {
            setHeight(Dimensions.get('window').height - e?.nativeEvent?.layout.y);
          }}
        />
        {!!height && <StationsSheet height={height} navigation={navigation} />}
      </Box>
    </>
  );
}

const styles = StyleSheet.create({
  scannerButtonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: -18,
    left: 0,
    height: 188,
    right: 0,
    zIndex: 1,
  },
  scannerButton: {
    borderStyle: 'solid',
    borderWidth: 14,
    borderColor: COLORS.PALE_BLUE,
    backgroundColor: COLORS.BLUE,
    alignItems: 'center',
    justifyContent: 'center',
    height: 188,
    width: 188,
    borderRadius: 94,
  },
});
