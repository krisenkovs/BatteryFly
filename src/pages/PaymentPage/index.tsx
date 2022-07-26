import { Box } from '@components/Box';
import { BlueButton } from '@components/Button';
import Header from '@components/Header';
import { ROUTES } from '@constants';
import { observer } from 'mobx-react';
import React, { useMemo, useState } from 'react';
import { NativeStackScreenProps } from 'react-native-screens/native-stack';
import { RootStackParamList } from '../../../App';
import { store } from '../../../store';
import CoinIcon from '../../icons/CoinIcon';
import LightIcon from '../../icons/LightIcon';
import { Carousel } from './Carousel';
import { Input } from './Input';

export const PaymentPage = observer(
  ({ navigation, route }: NativeStackScreenProps<RootStackParamList>) => {
    const [sum, setSum] = useState('');
    const [power, setPower] = useState('');
    const id = (route.params as RootStackParamList[ROUTES.PAY])?.id;
    const station = useMemo(() => {
      return store?.itemsPromise?.value?.content?.find((item) => item?.id === id);
    }, [id]);

    function handlePress() {
      navigation.navigate(ROUTES.PAY, { id, sum, power });
    }

    return (
      <Box flex={1}>
        <Header
          navigation={navigation}
          showProfileButton={false}
          showBackButton
          title="Цена и киловаты"
        />
        <Box flex={1} paddingLeft={16} paddingRight={16} paddingBottom={48}>
          <Box flex={1} />
          <Input
            icon={<CoinIcon />}
            title="BYN"
            values={[15, 25, 50, 75]}
            onChange={setSum}
            value={sum}
          />
          <Box marginTop={40}>
            <Input
              icon={<LightIcon />}
              title="Киловаты"
              values={[15, 25, 50, 75]}
              onChange={setPower}
              value={power}
            />
          </Box>
          <Box flex={1} />
          <Carousel data={[]} />
          <Box flex={1} />
          <BlueButton text="Далее" disabled={!sum || !power} onPress={handlePress} />
        </Box>
      </Box>
    );
  }
);
