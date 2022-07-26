import { Box } from '@components/Box';
import { Typography } from '@components/Typography';
import { COLORS } from '@constants';
import { ReactElement, useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity } from 'react-native';

type Props = {
  icon: ReactElement;
  title: string;
  value?: string;
  values: number[];
  onChange?: (value: string) => void;
};

export function Input({ value, icon, title, values, onChange }: Props) {
  const [width, setWidth] = useState(0);

  console.log(width);

  return (
    <Box>
      <Box marginLeft={32}>
        <Typography color={COLORS.LIGHT_BLACK} weight={500} size={12} lineHeight={15}>
          {title}
        </Typography>
      </Box>
      <Box flexDirection="row" alignItems="center" marginTop={8}>
        {icon}
        <Box marginLeft={8} flex={1} onLayout={(event) => setWidth(event.nativeEvent.layout.width)}>
          <TextInput
            keyboardType="numeric"
            style={[styles.input, { width }]}
            onChange={(value) => onChange?.(value.nativeEvent.text)}
            value={value}
          />
        </Box>
      </Box>
      <Box marginLeft={32} flexDirection="row" marginTop={12}>
        {values.map((item, index) => (
          <TouchableOpacity onPress={() => onChange?.(item.toString())} style={styles.button}>
            <Box
              marginLeft={index ? 8 : 0}
              height={32}
              alignItems="center"
              justifyContent="center"
              backgroundColor={COLORS.PALE_BLUE}
              borderRadius={8}
            >
              <Typography color={COLORS.BLUE} weight={600} size={14} lineHeight={18}>
                {item}
              </Typography>
            </Box>
          </TouchableOpacity>
        ))}
      </Box>
    </Box>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 28,
    fontSize: 18,
    lineHeight: 32,
    fontFamily: 'Mulish-700',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.GREY,
    outlineStyle: 'none',
  },
  button: {
    flex: 1,
  },
});
