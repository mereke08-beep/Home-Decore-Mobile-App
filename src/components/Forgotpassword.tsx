import React, { useState } from 'react';

import { Pressable, StyleSheet, Text, View } from 'react-native';

import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme';
import FormInput from './FormInput';

type Props = {
  onBack: () => void;
  onNext: () => void;
};

export default function ForgotPassword({ onBack, onNext }: Props) {
  const [email, setEmail] = useState('');

  const handleNext = () => {
    console.log('Next басылды', { email });
    onNext();
  };

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      {/* Жоғарғы бөлік: тақырып пен артқа қайту стрелкасы */}
      <View style={styles.top}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Forgot Password</Text>
          <Pressable style={styles.backButton} onPress={onBack}>
            <Ionicons name="arrow-back-outline" size={26} color={colors.text} />
          </Pressable>
        </View>

        <Text style={styles.title}>Reset Password?</Text>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </Text>
      </View>

      {/* Төменгі ашық қызғылт панель (жоғарғы бұрыштары домалақ) */}
      <View style={styles.panel}>
        <FormInput
          label="Enter Your Email Address"
          placeholder="example@example.com"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          background-Color={colors.white}
        />

        <Pressable style={styles.button} onPress={handleNext}>
          <Text style={styles.buttonText}>Next</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  top: {
    paddingHorizontal: 28,
    paddingTop: 56,
  },
  header: {
    height: 44,
    justifyContent: 'center',
  },
  headerTitle: {
    position: 'absolute',
    left: 0,
    right: 0,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '700',
    color: colors.primary,
  },
  backButton: {
    width: 44,
    height: 44,
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text,
    marginTop: 30,
  },
  description: {
    fontSize: 11,
    lineHeight: 15,
    color: colors.text,
    marginTop: 8,
  },
  panel: {
    flex: 1,
    marginTop: 30,
    backgroundColor: colors.secondary,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: 28,
    paddingTop: 36,
  },
  button: {
    alignSelf: 'center',
    backgroundColor: colors.primary,
    borderRadius: 22,
    paddingVertical: 11,
    paddingHorizontal: 52,
    marginTop: 18,
  },
  buttonText: {
    color: colors.primaryDark,
    fontSize: 18,
    fontWeight: '600',
  },
});