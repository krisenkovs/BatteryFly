import { View, StyleSheet, Text, TouchableHighlight, TouchableOpacity } from 'react-native';
import UserIcon from './UserIcon';
import { useNavigate } from 'react-router-native';
import BackIcon from './BackIcon';

type Props = {
  title?: string;
  showBackButton?: boolean;
};

export default function Header({ title, showBackButton }: Props) {
  const navigate = useNavigate();

  function handleProfilePress() {
    navigate('/profile');
  }

  function handleBackPress() {
    navigate(-1);
  }

  return (
    <View style={styles.container}>
      {showBackButton && (
        <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
          <BackIcon />
        </TouchableOpacity>
      )}
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity onPress={handleProfilePress}>
        <UserIcon />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 56,
    backgroundColor: '#D2E4FF',
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 28,
    paddingRight: 28,
  },
  title: {
    fontFamily: 'Mulish-800',
    fontSize: 20,
    color: '#2C2E31',
    flex: 1,
  },
  backButton: {
    marginRight: 28,
  },
});
