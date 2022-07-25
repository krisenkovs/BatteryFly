import { StyleSheet, Text, View, Image } from 'react-native';

import { NativeStackScreenProps } from 'react-native-screens/native-stack';
import { RootStackParamList } from '../../App';
import { BlueButton } from '../components/Button';
// @ts-ignore
import error from '../../assets/Error.png';

export default function PayErrorPage({ navigation }: NativeStackScreenProps<RootStackParamList>) {
  function handleTry() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }} />
      <Text style={styles.title}>Оплата не прошла</Text>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={error} />
      </View>
      <Text style={styles.info}>
        Бывает! Попробуй ещё раз, возможно не хватает средств на карте или ещё что-то
      </Text>
      <View style={{ flex: 1 }} />
      <BlueButton text="Попробовать снова" onPress={handleTry} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden',
    maxHeight: '100%',
    backgroundColor: '#EEF5FF',
    paddingHorizontal: 16,
    paddingBottom: 48,
  },
  title: {
    fontFamily: 'Mulish-800',
    fontSize: 24,
    lineHeight: 30,
    color: '#2C2E31',
    textAlign: 'center',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 32,
  },
  image: {
    width: 200,
    height: 200,
  },
  info: {
    fontFamily: 'Mulish-400',
    fontSize: 16,
    lineHeight: 24,
    color: '#2C2E31',
    textAlign: 'center',
    marginTop: 28,
  },
});
