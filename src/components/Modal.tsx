import { Box } from '@components/Box';
import { Typography } from '@components/Typography';
import { COLORS } from '@constants';
import { PropsWithChildren } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import CrossIcon from '../icons/CrossIcon';

type Props = PropsWithChildren<{
  visible?: boolean;
  title?: string;
  onClose: () => void;
}>;

export const Modal = ({ title, visible, children, onClose }: Props) => {
  return visible ? (
    <>
      <Box backgroundColor={COLORS.BLACK} style={styles.overlay} />
      <Box
        backgroundColor={COLORS.WHITE}
        style={styles.content}
        paddingTop={24}
        paddingBottom={24}
        paddingLeft={24}
        paddingRight={24}
      >
        <Box flexDirection="row" alignItems="center">
          <Box flex={1}>
            <Typography color={COLORS.BLACK} weight={700} size={16} lineHeight={20}>
              {title}
            </Typography>
          </Box>
          <TouchableOpacity onPress={onClose}>
            <Box
              height={32}
              width={32}
              borderRadius={16}
              justifyContent="center"
              alignItems="center"
              backgroundColor={COLORS.PALE_BLUE}
            >
              <CrossIcon width={20} height={20} color={COLORS.BLUE} />
            </Box>
          </TouchableOpacity>
        </Box>
        <Box>{children}</Box>
      </Box>
    </>
  ) : null;
};

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    opacity: 0.5,
  },
  content: {
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});
