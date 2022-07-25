import { Box } from '@components/Box';
import Header from '@components/Header';
import { Typography } from '@components/Typography';
import { COLORS, ROUTES } from '@constants';
import { observer } from 'mobx-react';
import React, { useMemo } from 'react';
import { NativeStackScreenProps } from 'react-native-screens/native-stack';
import { RootStackParamList } from '../../../App';
import { store } from '../../../store';
import { Carousel } from './Carousel';
import { Connector } from './Connector';

export const StationPage = observer(
  ({ navigation, route }: NativeStackScreenProps<RootStackParamList>) => {
    const id = (route.params as RootStackParamList[ROUTES.PAY])?.id;
    const station = useMemo(() => {
      return store?.itemsPromise?.value?.content?.find((item) => item?.id === id);
    }, [id]);

    function handlePress() {
      navigation.navigate(ROUTES.PAY, { id });
    }

    return (
      <Box flex={1}>
        <Header
          navigation={navigation}
          showProfileButton={false}
          showBackButton
          title="Выберите колонку"
          height={126}
        />
        <Box paddingLeft={16} paddingRight={16}>
          <Carousel data={station?.images || []} />
          <Box marginTop={16}>
            <Typography color={COLORS.BLACK} weight={600} size={18} lineHeight={22}>
              {station?.address}
            </Typography>
          </Box>
          <Box marginTop={8}>
            <Typography color={COLORS.LIGHT_BLACK} weight={700} size={16} lineHeight={20}>
              {`№ ${station?.id}`}
            </Typography>
          </Box>
          <Box marginTop={16}>
            <Box marginTop={16}>
              <Connector onPress={handlePress} />
            </Box>
            <Box marginTop={16}>
              <Connector onPress={handlePress} />
            </Box>
            <Box marginTop={16}>
              <Connector onPress={handlePress} />
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
);
