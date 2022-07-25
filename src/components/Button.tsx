import { ActivityIndicator, StyleProp, TouchableOpacity, ViewStyle } from 'react-native';
import { COLORS } from '../constants';
import { Typography } from './Typography';
import { Box } from './Box';

type Props = {
  text?: string;
  loading?: boolean;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
};

export function BlueButton({ text, loading, onPress, style }: Props) {
  return (
    <TouchableOpacity disabled={loading}>
      <Box
        height={48}
        justifyContent="center"
        alignItems="center"
        backgroundColor={COLORS.BLUE}
        borderRadius={8}
        style={style}
      >
        {loading ? (
          <ActivityIndicator color={COLORS.WHITE} />
        ) : (
          <Typography weight={700} lineHeight={23} size={18} color={COLORS.WHITE} onPress={onPress}>
            {text}
          </Typography>
        )}
      </Box>
    </TouchableOpacity>
  );
}
