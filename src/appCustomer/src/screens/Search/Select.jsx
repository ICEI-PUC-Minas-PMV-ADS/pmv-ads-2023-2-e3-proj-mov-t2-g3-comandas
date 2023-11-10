import COLORS from '@/constants/colors';
import React from 'react';
import SelectDropdown from 'react-native-select-dropdown';

export default function Select({
  reference,
  placeHolder,
  data,
  dropdownStyleLeft,
  isLoading,
  setFilter,
  setIndex,
}) {
  return (
    <SelectDropdown
      ref={reference}
      data={data}
      disabled={isLoading}
      buttonStyle={{
        borderRadius: 20,
        height: 25,
        width: 85,
        backgroundColor: COLORS.neutralLightGrey,
      }}
      buttonTextStyle={{ color: COLORS.secondary, fontSize: 12 }}
      rowStyle={{ width: 150 }}
      dropdownStyle={{
        width: 150,
        borderRadius: 15,
        left: dropdownStyleLeft ? `${dropdownStyleLeft}%` : 0,
      }}
      defaultButtonText={placeHolder}
      onSelect={(selectedItem, index) => {
        setFilter(setIndex ? index + 1 : selectedItem);
      }}
      buttonTextAfterSelection={(selectedItem) => selectedItem ?? placeHolder}
      rowTextForSelection={(item) => item}
      search
      searchInputStyle={{ width: 150, paddingHorizontal: 15 }}
    />
  );
}
