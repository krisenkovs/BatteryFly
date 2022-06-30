import { Text, View, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import Header from './Header';
import SlidersIcon from './SlidersIcon';
import BellIcon from './BellIcon';
import CaretRightIcon from './CaretRightIcon';
import { Route, Routes, useNavigate } from 'react-router-native';
import Help from './Help';

const DATA = [
  {
    id: 'history',
    title: 'История заправок',
  },
  {
    id: 'model',
    title: 'Tesla Model X',
  },
  {
    id: 'payment',
    title: 'Платежная информация',
  },
  {
    id: 'about',
    title: 'О приложении',
  },
  {
    id: 'help',
    title: 'Помощь',
  },
];

function ProfileHome() {
  const navigate = useNavigate();

  function handlePress(id: string) {
    navigate('help');
  }

  return (
    <View>
      <Header title="Профиль" showBackButton />
      <View style={styles.content}>
        <View style={styles.user}>
          <View style={styles.userAvatar} />
          <TouchableOpacity style={styles.userButtonLeft}>
            <SlidersIcon />
          </TouchableOpacity>
          <TouchableOpacity style={styles.userButtonRight}>
            <BellIcon />
          </TouchableOpacity>
          <Text style={styles.userName}>Алексей Иванов</Text>
          <Text style={styles.userEmail}>alexivanov@gmail.com</Text>
        </View>
        <View style={styles.list}>
          <FlatList
            data={DATA}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.listItem} onPress={() => handlePress(item?.id)}>
                <Text style={styles.listItemTitle}>{item.title}</Text>
                <CaretRightIcon />
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </View>
  );
}

export default function Profile() {
  return (
    <Routes>
      <Route index element={<ProfileHome />} />
      <Route path="help" element={<Help />} />
    </Routes>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingTop: 90,
    paddingLeft: 16,
    paddingRight: 16,
  },
  user: {
    backgroundColor: '#EEF5FF',
    borderRadius: 12,
    padding: 24,
    height: 135,
    justifyContent: 'flex-end',
  },
  userAvatar: {
    position: 'absolute',
    top: -50,
    left: 'calc(100%/2 - 50px)',
    height: 100,
    width: 100,
    borderRadius: 100,
    backgroundColor: '#D2E4FF',
  },
  userButtonLeft: {
    position: 'absolute',
    top: -20,
    left: 50,
    height: 40,
    width: 40,
    borderRadius: 40,
    backgroundColor: '#D2E4FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  userButtonRight: {
    position: 'absolute',
    top: -20,
    right: 50,
    height: 40,
    width: 40,
    borderRadius: 40,
    backgroundColor: '#D2E4FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  userName: {
    fontFamily: 'Mulish-700',
    fontSize: 16,
    color: '#2C2E31',
    textAlign: 'center',
  },
  userEmail: {
    fontFamily: 'Mulish-400',
    fontSize: 14,
    color: '#2C2E31',
    textAlign: 'center',
    marginTop: 6,
  },
  list: {
    flex: 1,
    paddingTop: 8,
  },
  listItem: {
    paddingTop: 24,
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#EEF5FF',
    flexDirection: 'row',
    alignItems: 'center',
  },
  listItemTitle: {
    fontSize: 16,
    fontFamily: 'Mulish-400',
    color: '#2C2E31',
    flex: 1,
  },
});
