import { TouchableOpacity } from 'react-native';
import UserIcon from '../icons/UserIcon';
import BackIcon from '../icons/BackIcon';
import { RootStackParamList } from '../../App';
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types';
import { Box } from './Box';
import { COLORS, ROUTES } from '@constants';
import { Typography } from './Typography';

type Props = {
  title?: string;
  showBackButton?: boolean;
  showProfileButton?: boolean;
  navigation: NativeStackNavigationProp<RootStackParamList>;
  height?: number;
};

export default function Header({
  title,
  showBackButton,
  navigation,
  showProfileButton = true,
  height = 56,
}: Props) {
  function handleProfilePress() {
    navigation.navigate(ROUTES.PROFILE);
  }

  function handleBackPress() {
    navigation.goBack();
  }

  return (
    <Box
      height={height}
      backgroundColor={COLORS.LIGHT_BLUE}
      paddingLeft={28}
      paddingRight={28}
      borderBottomRightRadius={12}
      borderBottomLeftRadius={12}
      flexDirection="column"
      paddingTop={12}
    >
      <Box flexDirection="row" alignItems="center">
        {showBackButton && (
          <Box marginRight={28}>
            <TouchableOpacity onPress={handleBackPress}>
              <Box
                height={32}
                width={32}
                alignItems="center"
                justifyContent="center"
                borderRadius={16}
              >
                <BackIcon />
              </Box>
            </TouchableOpacity>
          </Box>
        )}
        <Typography weight={800} size={20} color={COLORS.BLACK} flex={1}>
          {title}
        </Typography>
        {showProfileButton && (
          <TouchableOpacity onPress={handleProfilePress}>
            <UserIcon />
          </TouchableOpacity>
        )}
      </Box>
      <Box flex={1} />
    </Box>
  );
}
