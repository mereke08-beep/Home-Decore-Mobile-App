import React from 'react';

import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

import { StatusBar } from 'expo-status-bar';
import { colors } from '../theme';

type Props = {
  onLogin: () => void;
  onSignUp: () => void;
};

export default function Welcome({ onLogin, onSignUp }: Props) {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      {/* Логотип блогы: экранның ортасында үлкен болып тұрады */}
      <View style={styles.logoBlock}>
        {/* 1. Қызғылт үйдің суреті */}
        <Image
          source={require('../../assets/house-pink.png')}
          style={styles.house}
          resizeMode="contain"
        />

        {/* 2. HOME жазуы */}
        <Image
          source={require('../../assets/home-pink.png')}
          style={styles.homeText}
          resizeMode="contain"
        />

        {/* 3. DECOR жазуы */}
        <Image
          source={require('../../assets/decor-pink.png')}
          style={styles.decorText}
          resizeMode="contain"
        />
      </View>

      {/* Төменгі блок: мәтін және батырмалар */}
      <View style={styles.bottomBlock}>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
        </Text>

        {/* Log In батырмасы */}
        <Pressable style={styles.loginButton} onPress={onLogin}>
          <Text style={styles.loginButtonText}>Log In</Text>
        </Pressable>

        {/* Sign Up батырмасы */}
        <Pressable style={styles.signUpButton} onPress={onSignUp}>
          <Text style={styles.signUpButtonText}>Sign Up</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // Логотип пен төменгі блок бірге экранның ортасына орналасады
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoBlock: {
    alignItems: 'center',
  },
  house: {
    width: 210,
    height: 190,
  },
  homeText: {
    width: 210,
    height: 64,
    marginTop: 8,
  },
  decorText: {
    width: 200,
    height: 40,
    marginTop: 6,
  },
  bottomBlock: {
    alignItems: 'center',
    marginTop: 40, // логотип пен мәтін арасындағы қашықтық
  },
  description: {
    width: 290,
    fontSize: 15,
    color: colors.text,
    textAlign: 'center',
    lineHeight: 21,
    marginBottom: 30,
  },
  loginButton: {
    width: 250,
    height: 54,
    backgroundColor: colors.primary,
    borderRadius: 27,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButtonText: {
    color: colors.primaryDark,
    fontSize: 19,
    fontWeight: '700',
  },
  signUpButton: {
    width: 250,
    height: 54,
    backgroundColor: colors.secondary,
    borderRadius: 27,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  signUpButtonText: {
    color: colors.secondaryText,
    fontSize: 19,
    fontWeight: '700',
  },
});