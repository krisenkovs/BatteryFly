import Header from '../components/Header';
import { NativeStackScreenProps } from 'react-native-screens/native-stack';
import { RootStackParamList } from '../../App';

export default function Home({ navigation }: NativeStackScreenProps<RootStackParamList>) {
  return <Header title="Главная" navigation={navigation} />;
}
