import React, { useState } from 'react';

import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme';
import FormInput from './FormInput';

type Props = {
  onBack: () => void;
  onReset: () => void;
};

export default function SetPassword({ onBack, onReset }: Props) {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleReset = () => {
    console.log('Reset Password басылды', { password, confirmPassword });
    onReset();
  };

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        {/* Тақырып пен артқа қайту стрелкасы */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Set Password</Text>
          <Pressable style={styles.backButton} onPress={onBack}>
            <Ionicons name="arrow-back-outline" size={26} color={colors.text} />
          </Pressable>
        </View>

        <Text style={styles.title}>Change The Password</Text>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </Text>

        <View style={styles.form}>
          <FormInput
            label="Password"
            placeholder="••••••••"
            value={password}
            onChangeText={setPassword}
            secure
          />

          <FormInput
            label="Confirm Password"
            placeholder="••••••••"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secure
          />
        </View>

        <Pressable style={styles.button} onPress={handleReset}>
          <Text style={styles.buttonText}>Reset Password</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scrollContent: {
    paddingHorizontal: 28,
    paddingTop: 56,
    paddingBottom: 30,
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
  form: {
    marginTop: 36,
  },
  button: {
    alignSelf: 'center',
    backgroundColor: colors.primary,
    borderRadius: 22,
    paddingVertical: 11,
    paddingHorizontal: 40,
    marginTop: 26,
  },
  buttonText: {
    color: colors.primaryDark,
    fontSize: 18,
    fontWeight: '600',
  },
});