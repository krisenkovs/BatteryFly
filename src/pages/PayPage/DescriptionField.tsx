import { StyleSheet, View, Text } from 'react-native';

type Props = {
  label: string;
  value?: string;
};

export const DescriptionField = ({ label, value }: Props) => {
  return (
    <View style={styles.content}>
      <View style={styles.info}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.value}>{value}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 16,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderStyle: 'dashed',
    borderBottomColor: '#C2CDDB',
  },
  info: {
    paddingBottom: 20,
    flexDirection: 'row',
  },
  label: {
    fontFamily: 'Mulish-400',
    fontSize: 14,
    lineHeight: 18,
    color: '#656A71',
    flex: 1,
  },
  value: {
    fontFamily: 'Mulish-400',
    fontSize: 14,
    lineHeight: 18,
    color: '#2C2E31',
  },
});
