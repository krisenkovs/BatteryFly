import { Text, View, StyleSheet, Linking, TouchableWithoutFeedback } from 'react-native';
import Header from '../components/Header';
import ChatIcon from '../icons/ChatIcon';
import { NativeStackScreenProps } from 'react-native-screens/native-stack';
import { RootStackParamList } from '../../App';

export default function Help({ navigation }: NativeStackScreenProps<RootStackParamList>) {
  function handleLink() {
    Linking.openURL('mailto:support@batteryfly.by');
  }

  return (
    <View style={styles.container}>
      <Header title="Помощь" showBackButton navigation={navigation} />
      <View style={styles.content}>
        <ChatIcon />
        <Text style={styles.text}>
          По всем вопросам касательно работе приложения можно обращаться в службу поддержки
        </Text>
        <TouchableWithoutFeedback onPress={handleLink}>
          <Text style={styles.email}>support@batteryfly.by</Text>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 16,
    justifyContent: 'center',
    flex: 1,
  },
  text: {
    marginTop: 24,
    fontFamily: 'Mulish-400',
    fontSize: 16,
    color: '#2C2E31',
  },
  email: {
    marginTop: 24,
    fontFamily: 'Mulish-700',
    fontSize: 16,
    color: '#005EEB',
  },
});
