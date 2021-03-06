/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { View } from 'react-native';

// components
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText="Header" />
    <AlbumList />
  </View>
);

export default App;
