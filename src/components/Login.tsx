import React, { useState } from 'react';

import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme';
import FormInput from './FormInput';
import SocialButtons from './SocialButtons';

type Props = {
  onBack: () => void;
  onLogin: () => void;
  onSignUp: () => void;
  onForgotPassword: () => void;
};

export default function Login({ onBack, onLogin, onSignUp, onForgotPassword, }: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Log In басылды', { email, password });
    onLogin();
  };

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        {/* Жоғарғы бөлік */}
        <View>
          {/* Тақырып пен артқа қайту стрелкасы */}
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Log In</Text>
            <Pressable style={styles.backButton} onPress={onBack}>
              <Ionicons name="arrow-back-outline" size={26} color={colors.text} />
            </Pressable>
          </View>

          <Text style={styles.welcome}>Welcome</Text>
          <Text style={styles.subtitle}>Please enter your details to proceed.</Text>

          <View style={styles.form}>
            <FormInput
              label="Username Or Email"
              placeholder="example@example.com"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />

            <FormInput
              label="Password"
              placeholder="••••••••"
              value={password}
              onChangeText={setPassword}
              secure
            />
          </View>

          {/* Log In батырмасы */}
          <Pressable style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Log In</Text>
          </Pressable>

          <Pressable onPress={onForgotPassword}>
            <Text style={styles.forgotText}>Forgot Password?</Text>
          </Pressable>
        </View>

        {/* Төменгі бөлік */}
        <View style={styles.bottom}>
          <SocialButtons />

          <View style={styles.signUpRow}>
            <Text style={styles.signUpText}>Don't have an account? </Text>
            <Pressable onPress={onSignUp}>
              <Text style={styles.signUpLink}>Sign Up</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  // flexGrow: 1 арқасында төменгі бөлік әрқашан экранның төменгі жағында тұрады
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'space-between',
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
  welcome: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.text,
    marginTop: 30,
  },
  subtitle: {
    fontSize: 12,
    color: colors.text,
    marginTop: 4,
  },
  form: {
    marginTop: 50,
  },
  loginButton: {
    alignSelf: 'center',
    backgroundColor: colors.primary,
    borderRadius: 22,
    paddingVertical: 11,
    paddingHorizontal: 52,
    marginTop: 26,
  },
  loginButtonText: {
    color: colors.primaryDark,
    fontSize: 18,
    fontWeight: '600',
  },
  forgotText: {
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '700',
    color: colors.text,
    marginTop: 14,
  },
  bottom: {
    alignItems: 'center',
    marginTop: 40,
  },
  signUpRow: {
    flexDirection: 'row',
    marginTop: 18,
  },
  signUpText: {
    fontSize: 12,
    color: colors.text,
  },
  signUpLink: {
    fontSize: 12,
    color: colors.link,
  },
});