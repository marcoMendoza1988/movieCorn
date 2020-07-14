import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './navigation';
import { theme, withGalio, GalioProvider } from 'galio-framework';

function App() {
  return (
      <GalioProvider>
        <Navigation />
        <StatusBar style="auto" />
      </GalioProvider>
  );
}

const styles = theme => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default withGalio(App, styles);
