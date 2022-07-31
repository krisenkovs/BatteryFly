import {
  ActivityIndicator,
  StyleProp,
  TouchableOpacity,
  ViewStyle,
  StyleSheet,
} from 'react-native';
import { COLORS } from '@constants';
import { Typography } from './Typography';
import { Box } from './Box';

type Props = {
  text?: string;
  loading?: boolean;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
};

export function BlueButton({ text, loading, onPress, style, disabled = false }: Props) {
  return (
    <Box pointerEvents={disabled ? 'none' : 'auto'}>
      <TouchableOpacity disabled={loading} onPress={onPress}>
        <Box
          height={48}
          justifyContent="center"
          alignItems="center"
          backgroundColor={COLORS.BLUE}
          borderRadius={8}
          style={[style, disabled && styles.disabled]}
        >
          {loading ? (
            <ActivityIndicator color={COLORS.WHITE} />
          ) : (
            <Typography weight={700} lineHeight={23} size={18} color={COLORS.WHITE}>
              {text}
            </Typography>
          )}
        </Box>
      </TouchableOpacity>
    </Box>
  );
}

const styles = StyleSheet.create({
  disabled: {
    backgroundColor: COLORS.GREY,
  },
});
