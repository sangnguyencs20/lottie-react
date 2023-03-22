import React, { useRef, useEffect } from 'react';
import { SafeAreaView, FlatList, StyleSheet } from 'react-native';

import Item from './components/Item';
import slides from './components/Slides';

export default function App() {
  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={slides}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Item item={item} />}
        style={{ width: '90%' }}
      />
    </SafeAreaView>
  );
}
