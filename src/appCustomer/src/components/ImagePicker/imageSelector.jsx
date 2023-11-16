import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { Selector, View, SelectedImg } from './styles';
import { defaultImages } from '../data';

function FlatlistItem({ image, setImg }) {
  return (
    <Selector onPress={() => setImg(image)}>
      <View>
        <SelectedImg source={{ uri: image }} />
      </View>
    </Selector>
  );
}

function ImgSelector({ setImg }) {
  const [selectedId, setSelectedId] = useState(null);
  const renderItem = ({ item }) => (
    <FlatlistItem setImg={setImg} image={item} />
  );

  return (
    <View>
      <FlatList
        horizontal
        data={defaultImages}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        extraData={selectedId}
      />
    </View>
  );
}

export default ImgSelector;
