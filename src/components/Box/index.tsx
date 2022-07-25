import { PropsWithChildren, useMemo } from 'react';
import { StyleProp, View, ViewProps, ViewStyle } from 'react-native';
import { COLORS } from '../../constants';

type Props = PropsWithChildren<{
  paddingLeft?: number;
  paddingRight?: number;
  paddingBottom?: number;
  paddingTop?: number;
  marginLeft?: number;
  marginRight?: number;
  marginBottom?: number;
  marginTop?: number;
  flex?: number;
  flexDirection?: ViewStyle['flexDirection'];
  alignItems?: ViewStyle['alignItems'];
  justifyContent?: ViewStyle['justifyContent'];
  style?: StyleProp<ViewStyle>;
  backgroundColor?: COLORS;
  width?: number;
  height?: number;
  borderRadius?: number;
  borderBottomRightRadius?: number;
  borderBottomLeftRadius?: number;
  overflow?: ViewStyle['overflow'];
}> &
  ViewProps;

export function Box({
  children,
  borderBottomRightRadius,
  borderBottomLeftRadius,
  paddingBottom,
  paddingRight,
  paddingTop,
  paddingLeft,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  flex,
  flexDirection = 'column',
  justifyContent,
  alignItems,
  style,
  backgroundColor,
  width,
  height,
  borderRadius,
  overflow,
  ...rest
}: Props) {
  const styles = useMemo(() => {
    const values: StyleProp<ViewStyle> = {};
    if (paddingBottom !== undefined) {
      values['paddingBottom'] = paddingBottom;
    }
    if (paddingTop !== undefined) {
      values['paddingTop'] = paddingTop;
    }
    if (paddingRight !== undefined) {
      values['paddingRight'] = paddingRight;
    }
    if (paddingLeft !== undefined) {
      values['paddingLeft'] = paddingLeft;
    }

    if (marginBottom !== undefined) {
      values['marginBottom'] = marginBottom;
    }
    if (marginTop !== undefined) {
      values['marginTop'] = marginTop;
    }
    if (marginRight !== undefined) {
      values['marginRight'] = marginRight;
    }
    if (marginLeft !== undefined) {
      values['marginLeft'] = marginLeft;
    }
    if (flex !== undefined) {
      values['flex'] = flex;
    }
    if (alignItems !== undefined) {
      values['alignItems'] = alignItems;
    }
    if (justifyContent !== undefined) {
      values['justifyContent'] = justifyContent;
    }
    if (backgroundColor !== undefined) {
      values['backgroundColor'] = backgroundColor;
    }
    if (width !== undefined) {
      values['width'] = width;
    }
    if (height !== undefined) {
      values['height'] = height;
    }
    if (borderRadius !== undefined) {
      values['borderRadius'] = borderRadius;
    }
    if (overflow !== undefined) {
      values['overflow'] = overflow;
    }

    if (borderBottomRightRadius !== undefined) {
      values['borderBottomRightRadius'] = borderBottomRightRadius;
    }

    if (borderBottomLeftRadius !== undefined) {
      values['borderBottomLeftRadius'] = borderBottomLeftRadius;
    }
    values['flexDirection'] = flexDirection;

    return values;
  }, [
    paddingTop,
    paddingLeft,
    paddingRight,
    paddingBottom,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    flex,
    flexDirection,
    justifyContent,
    alignItems,
    backgroundColor,
    width,
    height,
    borderRadius,
    borderBottomRightRadius,
    borderBottomLeftRadius,
    overflow,
  ]);

  return (
    <View style={[styles, style]} {...rest}>
      {children}
    </View>
  );
}
