import COLORS from '@/constants/colors';
import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

export default function CustomSwitchGroup({ values, onPress }) {
  const [currentSelectedPayment, setCurrentSelectedPayment] = useState(0);

  const onSwitch = (idx) => {
    onPress(idx);
    setCurrentSelectedPayment(idx);
  };

  const renderSwitchGroup = () =>
    (values || []).map((items, idx) => {
      const isChecked = currentSelectedPayment === idx;

      return (
        <View style={styles.container}>
          <View style={styles.section}>
            <View style={styles.row}>
              <View style={styles.rowIcon}>
                <FeatherIcon
                  name={items.icon}
                  color={COLORS.linkTextGreen}
                  size={18}
                />
              </View>
              <Text style={styles.rowLabel}>{items.text}</Text>
              <View style={{ flex: 1 }} />
              <Switch
                key={idx}
                onValueChange={() => onSwitch(idx)}
                value={isChecked}
              />
            </View>
          </View>
        </View>
      );
    });
  return <View>{renderSwitchGroup()}</View>;
}

const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
  },
  container: {
    backgroundColor: COLORS.white,
    paddingVertical: 5,
    flexGrow: 1,
  },
  header: {
    paddingHorizontal: 24,
    marginBottom: 12,
  },
  section: {
    backgroundColor: COLORS.white,
    paddingHorizontal: 20,
  },
  sectionHeader: {
    paddingVertical: 8,
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.linkTextGreen,
    textTransform: 'uppercase',
    letterSpacing: 1.1,
  },
  rowWrapper: {
    borderTopWidth: 1,
    borderColor: COLORS.greyLineStyle,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 50,
    backgroundColor: COLORS.neutralLightGrey,
    borderRadius: 15,
    marginBottom: 12,
    paddingHorizontal: 12,
  },
  rowLabel: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.placeholderText,
  },
  rowValue: {
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.linkTextGreen,
  },
  rowIcon: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 6,
  },
});
