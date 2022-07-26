import { Box } from '@components/Box';
import { Typography } from '@components/Typography';
import { COLORS } from '@constants';
import React, { useCallback, useMemo, useState } from 'react';
import { FlatList, Pressable, StyleSheet } from 'react-native';

type Props = {
  data: { id?: number }[];
};

export function Carousel({ data = [] }: Props) {
  const [index, setIndex] = useState(0);
  const [width, setWidth] = useState(0);
  const onScroll = useCallback((event) => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const index = event.nativeEvent.contentOffset.x / slideSize;
    const roundIndex = Math.round(index);

    setIndex(roundIndex);
  }, []);

  const items = useMemo(() => {
    return [...data, {}];
  }, [data]);

  return (
    <Box>
      <Typography color={COLORS.BLACK} weight={700} size={16} lineHeight={20}>
        Способ оплаты
      </Typography>

      <Box marginTop={20} onLayout={(event) => setWidth(event.nativeEvent?.layout?.width)}>
        {!!width && (
          <FlatList
            data={items}
            renderItem={({ item }) => {
              return item?.id ? (
                <Box
                  borderRadius={8}
                  height={80}
                  backgroundColor={COLORS.PALE_BLUE}
                  style={{ width }}
                ></Box>
              ) : (
                <Pressable>
                  <Box
                    borderRadius={8}
                    height={80}
                    backgroundColor={COLORS.PALE_BLUE}
                    style={{ width }}
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Typography color={COLORS.BLUE} weight={600} size={14} lineHeight={18}>
                      Добавить карту для оплаты
                    </Typography>
                  </Box>
                </Pressable>
              );
            }}
            pagingEnabled
            horizontal
            showsHorizontalScrollIndicator={false}
            bounces={false}
            onScroll={onScroll}
          />
        )}
        <Box flexDirection="row" alignItems="center" justifyContent="center" paddingTop={16}>
          {items.map((_, i) => {
            return (
              <Box
                width={8}
                height={8}
                borderRadius={4}
                backgroundColor={COLORS.PALE_BLUE}
                marginRight={6}
                key={i}
                style={[index === i && styles.paginationDotActive]}
              />
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}

const styles = StyleSheet.create({
  paginationDotActive: { backgroundColor: COLORS.BLUE },
});
