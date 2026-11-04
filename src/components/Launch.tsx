import React, { useEffect } from 'react';

import { Image, StyleSheet, View } from 'react-native';

import { StatusBar } from 'expo-status-bar';
import { colors } from '../theme';

type Props = {
  onFinish: () => void;
};

export default function Launch({ onFinish }: Props) {
  // Бет ашылғаннан 2.5 секундтан кейін автоматты түрде келесі бетке өтеді
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 2500);

    // Бет жабылса, таймерді тоқтатамыз
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      {/* 1. Үйдің суреті */}
      <Image
        source={require('../../assets/house.png')}
        style={styles.house}
        resizeMode="contain"
      />

      {/* 2. HOME жазуы */}
      <Image
        source={require('../../assets/home-text.png')}
        style={styles.homeText}
        resizeMode="contain"
      />

      {/* 3. DECOR жазуы */}
      <Image
        source={require('../../assets/decor-text.png')}
        style={styles.decorText}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  house: {
    width: 150,
    height: 135,
  },
  homeText: {
    width: 150,
    height: 45,
    marginTop: 6,
  },
  decorText: {
    width: 140,
    height: 28,
    marginTop: 4,
  },
});