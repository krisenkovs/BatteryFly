import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

import { NativeStackScreenProps } from 'react-native-screens/native-stack';
import { RootStackParamList } from '../../../App';
import CrossIcon from '../../icons/CrossIcon';
// @ts-ignore
import chargeIndicator from '../../../assets/ChargeIndicator.png';
// @ts-ignore
import powerIndicator from '../../../assets/PowerIndicator.png';
import { BlueButton } from '../../components/Button';
import { ROUTES } from '../../constants';

export default function ChargePage({ navigation }: NativeStackScreenProps<RootStackParamList>) {
  function handleCancel() {
    navigation.navigate(ROUTES.MAIN);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerButtonContainer}>
          <TouchableOpacity style={styles.closeButton} onPress={handleCancel}>
            <CrossIcon />
          </TouchableOpacity>
        </View>
        <Text style={styles.headerText}>Идёт зарядка батареи</Text>
        <View style={styles.imageContainer}>
          <View style={styles.imageBackground}>
            <Image source={chargeIndicator} style={styles.image} />
          </View>
        </View>
      </View>
      <View style={styles.indicatorContainer}>
        <View style={styles.powerContainer}>
          <View style={styles.powerValueContainer}>
            <Text style={styles.powerValueLeft}>34</Text>
            <Text style={styles.powerValueRight}>/50</Text>
          </View>
          <Text style={styles.powerInfo}>kW*h</Text>
        </View>
        <Image source={powerIndicator} style={styles.powerImage} />
        <View style={styles.sumContainer}>
          <Text style={styles.sumValue}>150</Text>
          <Text style={styles.sumInfo}>BYN</Text>
        </View>
      </View>
      <Text style={styles.info}>Выполняется зарядка, не отсоединяйте коннектор от авто</Text>
      <TouchableOpacity>
        <Text style={styles.about}>Подробнее о заправке</Text>
      </TouchableOpacity>
      <View style={{ flex: 1 }} />
      <BlueButton text="Остановить" style={styles.button} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden',
    maxHeight: '100%',
  },
  header: {
    backgroundColor: '#EEF5FF',
    height: 260,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  headerButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 16,
    marginTop: 16,
  },
  closeButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#ffffff',
    fontSize: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    marginTop: 22,
    fontFamily: 'Mulish-800',
    fontSize: 24,
    lineHeight: 30,
    color: '#2C2E31',
    textAlign: 'center',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 260,
    marginBottom: -130,
    marginTop: 16,
  },
  imageBackground: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 260,
    height: 260,
    borderRadius: 130,
    backgroundColor: '#ffffff',
  },
  image: {
    height: 240,
    width: 240,
  },
  indicatorContainer: {
    marginTop: 146,
    paddingHorizontal: 28,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  powerContainer: {
    width: 72,
  },
  powerValueContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  powerValueLeft: {
    fontFamily: 'Mulish-700',
    fontSize: 18,
    lineHeight: 22,
    color: '#2C2E31',
  },
  powerValueRight: {
    fontFamily: 'Mulish-700',
    fontSize: 18,
    lineHeight: 22,
    color: '#656A71',
  },
  powerInfo: {
    fontFamily: 'Mulish-700',
    fontSize: 12,
    lineHeight: 15,
    color: '#656A71',
    textAlign: 'center',
  },
  powerImage: {
    width: 126,
    height: 108,
  },
  sumContainer: {
    width: 72,
  },
  sumValue: {
    fontFamily: 'Mulish-700',
    fontSize: 18,
    lineHeight: 22,
    color: '#2C2E31',
    textAlign: 'center',
  },
  sumInfo: {
    fontFamily: 'Mulish-700',
    fontSize: 12,
    lineHeight: 15,
    color: '#656A71',
    textAlign: 'center',
  },
  info: {
    fontFamily: 'Mulish-400',
    fontSize: 16,
    lineHeight: 24,
    color: '#656A71',
    textAlign: 'center',
    marginTop: 24,
    paddingHorizontal: 16,
  },
  about: {
    fontFamily: 'Mulish-700',
    fontSize: 16,
    lineHeight: 20,
    color: '#005EEB',
    textAlign: 'center',
    marginTop: 24,
    paddingHorizontal: 16,
  },
  button: {
    marginHorizontal: 16,
    marginBottom: 48,
  },
});
