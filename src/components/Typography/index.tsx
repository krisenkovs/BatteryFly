import { PropsWithChildren, useMemo } from 'react';
import { StyleProp, Text, TextProps, TextStyle, ViewStyle } from 'react-native';
import { COLORS } from '../../constants';

type Props = PropsWithChildren<{
  weight?: 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
  size?: number;
  lineHeight?: number;
  color: COLORS;
  flex?: number;
  textAlign?: TextStyle['textAlign'];
}> &
  TextProps;

export function Typography({
  children,
  weight,
  size,
  lineHeight,
  color,
  style,
  flex,
  textAlign,
  ...rest
}: Props) {
  const styles = useMemo(() => {
    const values: StyleProp<TextStyle> = {};
    if (weight !== undefined) {
      values['fontFamily'] = `Mulish-${weight}`;
    }
    if (size !== undefined) {
      values['fontSize'] = size;
    }
    if (lineHeight !== undefined) {
      values['lineHeight'] = lineHeight;
    }
    if (color !== undefined) {
      values['color'] = color;
    }
    if (flex !== undefined) {
      values['flex'] = flex;
    }
    if (textAlign !== undefined) {
      values['textAlign'] = textAlign;
    }
    return values;
  }, [weight, size, lineHeight, color, flex, textAlign]);

  return (
    <Text style={[styles, style]} {...rest}>
      {children}
    </Text>
  );
}
