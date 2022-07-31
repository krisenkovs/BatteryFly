import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StatusBar } from 'react-native';
import Header from '../components/Header';
import { NativeStackScreenProps } from 'react-native-screens/native-stack';
import { RootStackParamList } from '../../App';
import { Camera, CameraType } from 'expo-camera';
import { BarCodeScanner, PermissionStatus } from 'expo-barcode-scanner';
import { BarCodeScanningResult } from 'expo-camera/build/Camera.types';
import { Box } from '@components/Box';
import { COLORS, ROUTES } from '@constants';
import { observer } from 'mobx-react';
import { store } from '../../store';
import Svg, { Path } from 'react-native-svg';

export const ScannerPage = observer(
  ({ navigation }: NativeStackScreenProps<RootStackParamList>) => {
    const [hasPermission, setHasPermission] = useState<boolean | null>(null);

    useEffect(() => {
      (async () => {
        const { status } = await Camera.requestCameraPermissionsAsync();
        setHasPermission(status === PermissionStatus.GRANTED);
      })();
    }, []);

    function handleCode(scanningResult: BarCodeScanningResult) {
      const item = store.itemsPromise?.value?.content?.find(
        (item) => item.linkQr === scanningResult?.data
      );

      if (item) {
        navigation.navigate(ROUTES.PAY, { id: item?.id });
      } else {
        navigation.navigate(ROUTES.MAIN);
      }
    }

    if (hasPermission === null) {
      return (
        <Box flex={1}>
          <Header
            navigation={navigation}
            showProfileButton={false}
            showBackButton
            title="Отсканируйте QR код"
          />
          <Box flex={1} justifyContent="center" alignItems="center">
            <ActivityIndicator />
          </Box>
        </Box>
      );
    }
    if (!hasPermission) {
      navigation.navigate(ROUTES.MAIN);
    }
    return (
      <Camera
        type={CameraType.back}
        style={{ flex: 1 }}
        barCodeScannerSettings={{
          barCodeTypes: [BarCodeScanner.Constants.BarCodeType.qr],
        }}
        onBarCodeScanned={handleCode}
      >
        <StatusBar backgroundColor={COLORS.LIGHT_BLUE} />
        <Header
          navigation={navigation}
          showProfileButton={false}
          showBackButton
          title="Отсканируйте QR код"
        />
        <Box flex={1}>
          <Box flex={1} />
          <Box flexDirection="row">
            <Box flex={1} />
            <Box borderRadius={12}>
              <Svg width="203" height="200" viewBox="0 0 203 200" fill="none">
                <Path
                  d="M201 62V22C201 10.9543 192.046 2 181 2H141"
                  stroke={COLORS.BLUE}
                  strokeWidth="4"
                  strokeLinejoin="round"
                />
                <Path
                  d="M2 138L2 178C2 189.046 10.9543 198 22 198L62 198"
                  stroke={COLORS.BLUE}
                  strokeWidth="4"
                  strokeLinejoin="round"
                />
                <Path
                  d="M2 62V22C2 10.9543 10.9543 2 22 2H62"
                  stroke={COLORS.BLUE}
                  strokeWidth="4"
                  strokeLinejoin="round"
                />
                <Path
                  d="M201 138L201 178C201 189.046 192.046 198 181 198L141 198"
                  stroke={COLORS.BLUE}
                  strokeWidth="4"
                  strokeLinejoin="round"
                />
              </Svg>
            </Box>
            <Box flex={1} />
          </Box>
          <Box flex={1} />
        </Box>
      </Camera>
    );
  }
);
