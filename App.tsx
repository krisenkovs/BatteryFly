import { Box } from '@components/Box';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AppRegistry, StatusBar } from 'react-native';
import { COLORS, ROUTES } from '@constants';
import Home from './src/pages/Home';
import { PaymentPage } from './src/pages/PaymentPage';
import Profile from './src/pages/Profile';
import MainPage from './src/pages/MainPage';
import Help from './src/pages/Help';
import ChargePage from './src/pages/ChargePage';
import PayErrorPage from './src/pages/PayErrorPage';
import { PayPage } from './src/pages/PayPage';
import { ScannerPage } from './src/pages/ScannerPage';
import { observer } from 'mobx-react';
import { useCallback, useEffect } from 'react';
import { StationPage } from './src/pages/StationPage';
import * as SplashScreen from 'expo-splash-screen';
import { store } from './store';

export type RootStackParamList = {
  [ROUTES.HOME]: undefined;
  [ROUTES.PROFILE]: undefined;
  [ROUTES.HELP]: undefined;
  [ROUTES.MAIN]: undefined;
  [ROUTES.PAY]: {
    id: number;
    sum?: string;
    power?: string;
  };
  [ROUTES.CHARGE]: undefined;
  [ROUTES.PAY_ERROR]: undefined;
  [ROUTES.SCANNER]: undefined;
  [ROUTES.STATION]: { id: number };
  [ROUTES.PAYMENT]: { id: number };
};

const Stack = createStackNavigator<RootStackParamList>();

SplashScreen.preventAutoHideAsync();

const App = observer(() => {
  let [fontsLoaded] = useFonts({
    'Mulish-200': require('./assets/Mulish-ExtraLight.ttf'),
    'Mulish-300': require('./assets/Mulish-Light.ttf'),
    'Mulish-400': require('./assets/Mulish-Regular.ttf'),
    'Mulish-500': require('./assets/Mulish-Medium.ttf'),
    'Mulish-600': require('./assets/Mulish-SemiBold.ttf'),
    'Mulish-700': require('./assets/Mulish-Bold.ttf'),
    'Mulish-800': require('./assets/Mulish-ExtraBold.ttf'),
    'Mulish-900': require('./assets/Mulish-Black.ttf'),
  });

  useEffect(() => {
    store.loadItems();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Box onLayout={onLayoutRootView} flex={1}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={ROUTES.CHARGE}
          screenOptions={{
            header: () => null,
            headerShown: false,
            animationEnabled: false,
            cardStyle: {
              backgroundColor: COLORS.WHITE,
              overflow: 'hidden',
            },
          }}
        >
          <Stack.Screen name={ROUTES.HOME} component={Home} />
          <Stack.Screen name={ROUTES.PROFILE} component={Profile} />
          <Stack.Screen name={ROUTES.HELP} component={Help} />
          <Stack.Screen name={ROUTES.MAIN} component={MainPage} options={{ title: '??????????????' }} />
          <Stack.Screen
            name={ROUTES.CHARGE}
            component={ChargePage}
            options={{ title: '??????????????' }}
          />
          <Stack.Screen
            name={ROUTES.PAY_ERROR}
            component={PayErrorPage}
            options={{ title: '????????????' }}
          />
          <Stack.Screen
            name={ROUTES.PAY}
            component={PayPage}
            options={{ title: '?????????????? ??????????????' }}
          />
          <Stack.Screen
            name={ROUTES.SCANNER}
            component={ScannerPage}
            options={{ title: '???????????????????????? QR ??????' }}
          />
          <Stack.Screen
            name={ROUTES.STATION}
            component={StationPage}
            options={{ title: '???????????????? ??????????????' }}
          />
          <Stack.Screen
            name={ROUTES.PAYMENT}
            component={PaymentPage}
            options={{ title: '???????? ?? ????????????????' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Box>
  );
});

export default App;

AppRegistry.registerComponent('batteryfly', () => App);
