import Header from '../../components/Header';
import { NativeStackScreenProps } from 'react-native-screens/native-stack';
import { RootStackParamList } from '../../../App';
// @ts-ignore
import WavesFly from '../../../assets/WavesFly.png';
import { DescriptionField } from './DescriptionField';
import { store } from './store';
import { store as mainStore } from '../../../store';
import { observer } from 'mobx-react';
import { useEffect, useMemo } from 'react';
import { Image } from 'react-native';
import { BlueButton } from '@components/Button';
import { ROUTES } from '@constants';
import { Box } from '@components/Box';

export const PayPage = observer(function PayPage({
  navigation,
  route,
}: NativeStackScreenProps<RootStackParamList>) {
  const id = (route.params as RootStackParamList[ROUTES.PAY])?.id;
  const station = useMemo(() => {
    return mainStore?.itemsPromise?.value?.content?.find((item) => item?.id === id);
  }, [id]);

  useEffect(() => {
    return () => store.destroy();
  }, []);

  useEffect(() => {
    if (store.startPromise?.fulfilled) {
      navigation.navigate(ROUTES.CHARGE);
    }
  }, [store.startPromise?.fulfilled]);

  useEffect(() => {
    if (store.startPromise?.error) {
      navigation.navigate(ROUTES.PAY_ERROR);
    }
  }, [store.startPromise?.error]);

  function handleStart() {
    store.start(station?.id?.toString());
  }

  return (
    <Box flex={1}>
      <Header
        title="Начните зарядку"
        showBackButton
        showProfileButton={false}
        navigation={navigation}
      />
      <Box flex={1} />
      <Image source={WavesFly} resizeMethod="auto" style={{ height: 98 }} />
      <Box flex={1} />
      <Box paddingLeft={16} paddingRight={16}>
        <DescriptionField label="Адрес" value={station?.address} />
        <DescriptionField label="№ колонки" value={station?.id?.toString()} />
        <DescriptionField label="Тип разъема" value="CCS" />
        <DescriptionField label="Киловаты" value="100" />
        <DescriptionField label="BYN" value="15" />
        <DescriptionField label="Способ оплаты" value="Visa •••• 4320 " />
      </Box>
      <Box flex={1} />
      <Box marginBottom={48} marginLeft={16} marginRight={16}>
        <BlueButton
          text="Оплатить и зарядить"
          loading={store.startPromise?.pending}
          onPress={handleStart}
        />
      </Box>
    </Box>
  );
});
