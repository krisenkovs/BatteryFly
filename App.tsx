import { StyleSheet } from 'react-native';
import Profile from './Profile';
import { NativeRouter, Route, Routes } from 'react-router-native';
import Home from './Home';
import { useFonts } from 'expo-font';

export default function App() {
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

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NativeRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </NativeRouter>
  );
}
