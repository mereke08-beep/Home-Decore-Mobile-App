import React, { useState } from 'react';

import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme';
import FormInput from './FormInput';
import SocialButtons from './SocialButtons';

type Props = {
  onBack: () => void;
  onSignUp: () => void;
  onLogin: () => void;
};

export default function SignUp({ onBack, onSignUp, onLogin }: Props) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = () => {
    console.log('Sign Up басылды', {
      fullName,
      email,
      mobile,
      birthDate,
      password,
      confirmPassword,
    });
    onSignUp();
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
          <Text style={styles.headerTitle}>Create Account</Text>
          <Pressable style={styles.backButton} onPress={onBack}>
            <Ionicons name="arrow-back-outline" size={26} color={colors.text} />
          </Pressable>
        </View>

        <View style={styles.form}>
          <FormInput
            label="Full Name"
            placeholder="Example@Example.Com"
            value={fullName}
            onChangeText={setFullName}
          />

          <FormInput
            label="Email"
            placeholder="Example@Example.Com"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />

          <FormInput
            label="Mobile Number"
            placeholder="+ 123 456 789"
            value={mobile}
            onChangeText={setMobile}
            keyboardType="phone-pad"
          />

          <FormInput
            label="Date Of Birth"
            placeholder="DD / MM /YYY"
            value={birthDate}
            onChangeText={setBirthDate}
            keyboardType="numbers-and-punctuation"
          />

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

        <Text style={styles.terms}>
          By continuing, you agree to{'\n'}
          <Text style={styles.termsBold}>Terms of Use</Text> and{' '}
          <Text style={styles.termsBold}>Privacy Policy.</Text>
        </Text>

        {/* Sign Up батырмасы */}
        <Pressable style={styles.signUpButton} onPress={handleSignUp}>
          <Text style={styles.signUpButtonText}>Sign Up</Text>
        </Pressable>

        <View style={styles.social}>
          <SocialButtons />
        </View>

        <View style={styles.loginRow}>
          <Text style={styles.loginText}>Already have an account? </Text>
          <Pressable onPress={onLogin}>
            <Text style={styles.loginLink}>Log in</Text>
          </Pressable>
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
  form: {
    marginTop: 16,
  },
  terms: {
    textAlign: 'center',
    fontSize: 11,
    color: colors.text,
    lineHeight: 15,
    marginTop: 6,
  },
  termsBold: {
    fontWeight: '700',
  },
  signUpButton: {
    alignSelf: 'center',
    backgroundColor: colors.primary,
    borderRadius: 22,
    paddingVertical: 11,
    paddingHorizontal: 52,
    marginTop: 12,
  },
  signUpButtonText: {
    color: colors.primaryDark,
    fontSize: 18,
    fontWeight: '600',
  },
  social: {
    marginTop: 18,
  },
  loginRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 18,
  },
  loginText: {
    fontSize: 12,
    color: colors.text,
  },
  loginLink: {
    fontSize: 12,
    color: colors.link,
  },
});