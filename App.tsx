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
import { useEffect } from 'react';
import { StationPage } from './src/pages/StationPage';
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

  if (!fontsLoaded || store.itemsPromise?.pending) {
    return null;
  }

  return (
    <NavigationContainer>
      <StatusBar />
      <Stack.Navigator
        initialRouteName={ROUTES.MAIN}
        screenOptions={{
          header: () => null,
          headerShown: false,
          cardStyle: {
            backgroundColor: COLORS.WHITE,
            overflow: 'hidden',
          },
        }}
      >
        <Stack.Screen name={ROUTES.HOME} component={Home} />
        <Stack.Screen name={ROUTES.PROFILE} component={Profile} />
        <Stack.Screen name={ROUTES.HELP} component={Help} />
        <Stack.Screen name={ROUTES.MAIN} component={MainPage} options={{ title: 'Главная' }} />
        <Stack.Screen name={ROUTES.CHARGE} component={ChargePage} options={{ title: 'Зарядка' }} />
        <Stack.Screen
          name={ROUTES.PAY_ERROR}
          component={PayErrorPage}
          options={{ title: 'Ошибка' }}
        />
        <Stack.Screen
          name={ROUTES.PAY}
          component={PayPage}
          options={{ title: 'Начните зарядку' }}
        />
        <Stack.Screen
          name={ROUTES.SCANNER}
          component={ScannerPage}
          options={{ title: 'Отсканируйте QR код' }}
        />
        <Stack.Screen
          name={ROUTES.STATION}
          component={StationPage}
          options={{ title: 'Выберите колонку' }}
        />
        <Stack.Screen
          name={ROUTES.PAYMENT}
          component={PaymentPage}
          options={{ title: 'Цена и киловаты' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
});

export default App;

AppRegistry.registerComponent('batteryfly', () => App);
