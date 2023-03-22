import React, { useRef, useEffect } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';

export default function App() {

  return (
    <View>
      <LottieView
        autoPlay
        loop
        style={{
          width: 300,
          height: 300,
          backgroundColor: '#eee',
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={require('./assets/coffee.json')}
      />
    </View>
  );
}
