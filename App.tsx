import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { LoadAssets } from "./src/components";
import Chess, { assets } from "./src/";

const fonts = {
  "SFProDisplay-Bold": require("./assets/fonts/SFPro/SF-Pro-Display-Bold.otf"),
  "SFProDisplay-Semibold": require("./assets/fonts/SFPro/SF-Pro-Display-Semibold.otf"),
  "SFProDisplay-Regular": require("./assets/fonts/SFPro/SF-Pro-Display-Regular.otf"),
  "SFProDisplay-Medium": require("./assets/fonts/SFPro/SF-Pro-Display-Medium.otf"),
  "Nunito-Bold": require("./assets/fonts/Nunito/Nunito-Bold.ttf"),
  "Nunito-Regular": require("./assets/fonts/Nunito/Nunito-Regular.ttf"),
  "GothamRounded-Medium": require("./assets/fonts/GothamRounded/GothamRounded-Medium.otf"),
  "GothamRounded-Bold": require("./assets/fonts/GothamRounded/GothamRounded-Bold.otf"),
  "GothamRounded-Light": require("./assets/fonts/GothamRounded/GothamRounded-Light.otf"),
};

export default function App() {
  return (
    <LoadAssets assets={assets} fonts={fonts}>
      <Chess />
    </LoadAssets>
  );
}
