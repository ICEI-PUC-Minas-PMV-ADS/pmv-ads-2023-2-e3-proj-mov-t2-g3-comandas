import React from 'react';
import { View } from 'react-native-animatable';
import Category from './Category';
import Item from './Item';

export default function ItemCard({ data, location, shop, navigation }) {
  return Object.entries(data).map(([category, items]) => (
    <View
      onLayout={(event) => {
        const { layout } = event.nativeEvent;
        location.push(layout.y);
      }}
      style={{ gap: 15 }}
      key={Math.random()}
    >
      {category && <Category key={Math.random()} category={category} />}
      {items.map((itemInfo) => (
        <Item
          title={itemInfo.name}
          description={itemInfo.description}
          price={itemInfo.price}
          image={itemInfo.photo_url}
          key={itemInfo.id}
          navigation={navigation}
          item={itemInfo}
          shop={shop}
        />
      ))}
    </View>
  ));
}
