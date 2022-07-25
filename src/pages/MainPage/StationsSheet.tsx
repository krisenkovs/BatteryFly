import {
  Animated,
  Dimensions,
  FlatList,
  Pressable,
  StyleSheet,
  TouchableHighlight,
  View,
} from 'react-native';
import { useEffect, useRef, useState } from 'react';
import { StationType } from '../../types';
import { observer } from 'mobx-react';
import { RootStackParamList } from '../../../App';
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types';
import { COLORS, ROUTES } from '@constants';
import { Box } from '@components/Box';
import { Typography } from '@components/Typography';
import { store } from '../../../store';

type Props = {
  height: number;
  navigation: NativeStackNavigationProp<RootStackParamList>;
};

export const StationsSheet = observer(function StationsSheet({ height, navigation }: Props) {
  const fadeAnim = useRef(new Animated.Value(height)).current;
  const [h, setH] = useState(height);
  const [isFull, setFull] = useState(false);

  useEffect(() => {
    fadeAnim.addListener((e) => setH(e.value));
  }, [fadeAnim]);

  const toFull = () => {
    Animated.spring(fadeAnim, {
      toValue: Dimensions.get('window').height,
      useNativeDriver: true,
    }).start(() => setFull(true));
  };
  const toSmall = () => {
    Animated.spring(fadeAnim, {
      toValue: height,
      useNativeDriver: true,
    }).start(() => setFull(false));
  };

  return (
    <Animated.View style={[styles.content, { height: h }]}>
      <TouchableHighlight onPress={() => (isFull ? toSmall() : toFull())} underlayColor="#EEF5FF">
        <Box alignItems="center">
          <Box
            width={40}
            height={6}
            marginTop={16}
            marginBottom={16}
            borderRadius={8}
            backgroundColor={COLORS.LIGHT_BLUE}
          />
        </Box>
      </TouchableHighlight>
      <Box paddingRight={16} paddingLeft={16}>
        <Typography size={18} lineHeight={24} weight={700} color={COLORS.BLACK}>
          Выбрать станцию
        </Typography>
      </Box>
      <View style={{ flex: 1 }}>
        <FlatList<StationType>
          data={store.itemsPromise?.value?.content}
          style={styles.list}
          renderItem={({ item }) => {
            return (
              <Pressable
                style={styles.listItem}
                onPress={() => navigation.navigate(ROUTES.STATION, { id: item?.id })}
              >
                <Typography size={16} lineHeight={20} weight={500} color={COLORS.BLACK}>
                  {item.address}
                </Typography>
                <Box marginTop={4}>
                  <Typography
                    size={14}
                    lineHeight={18}
                    weight={700}
                    color={COLORS.LIGHT_BLACK}
                  >{`№ ${item.id}`}</Typography>
                </Box>
              </Pressable>
            );
          }}
          keyExtractor={(item: StationType) => `${item.id}`}
        />
      </View>
    </Animated.View>
  );
});

const styles = StyleSheet.create({
  content: {
    backgroundColor: COLORS.PALE_BLUE,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    overflow: 'hidden',
    zIndex: 1,
    flexDirection: 'column',
    flex: 1,
  },
  list: {
    marginTop: 4,
    paddingHorizontal: 16,
  },
  listItem: {
    backgroundColor: COLORS.WHITE,
    borderRadius: 12,
    marginVertical: 8,
    padding: 12,
  },
});
