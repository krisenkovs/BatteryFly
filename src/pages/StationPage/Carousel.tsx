import { Box } from '@components/Box';
import { API_PATH, COLORS } from '@constants';
import React, { useCallback, useState } from 'react';
import { FlatList, Image, StyleSheet } from 'react-native';
import { API } from '../../constants/api';

type Props = {
  data: { id?: number; imageId?: string }[];
};

export function Carousel({ data }: Props) {
  const [index, setIndex] = useState(0);
  const [width, setWidth] = useState(0);
  const onScroll = useCallback((event) => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const index = event.nativeEvent.contentOffset.x / slideSize;
    const roundIndex = Math.round(index);

    setIndex(roundIndex);
  }, []);

  return (
    <Box
      height={240}
      borderRadius={12}
      marginTop={-64}
      onLayout={(event) => setWidth(event.nativeEvent?.layout?.width)}
    >
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Image
            source={{ uri: `${API_PATH}/${API.IMAGE}/${item.imageId}` }}
            style={[styles.slideImage, { width }]}
          ></Image>
        )}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        bounces={false}
        onScroll={onScroll}
      />
      <Box
        style={styles.pagination}
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        paddingTop={10}
        paddingBottom={10}
      >
        {data.map((_, i) => {
          return (
            <Box
              width={4}
              height={4}
              borderRadius={2}
              backgroundColor={COLORS.WHITE}
              marginRight={4}
              key={i}
              style={[index === i && styles.paginationDotActive]}
            />
          );
        })}
      </Box>
    </Box>
  );
}

const styles = StyleSheet.create({
  slideImage: { height: 240, borderRadius: 12 },

  pagination: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },

  paginationDotActive: { width: 25 },
});
