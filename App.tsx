import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Launch from './src/components/Launch';
import Welcome from './src/components/Welcome';
import Onboarding from './src/components/Onboarding';
import { colors } from './src/theme';

// Бет түрлері. Жаңа бет қосқанда осында атын қосамыз.
type Page = 'launch' | 'welcome' | 'onboarding' | 'login' | 'signup';

export default function App() {
  const [page, setPage] = useState<Page>('launch');

  // Onboarding аяқталғанда қай бетке өтетінін есте сақтаймыз
  // (Log In басылса 'login', Sign Up басылса 'signup')
  const [afterOnboarding, setAfterOnboarding] = useState<Page>('login');

  switch (page) {
    case 'launch':
      return <Launch onFinish={() => setPage('welcome')} />;

    case 'welcome':
      return (
        <Welcome
          onLogin={() => {
            setAfterOnboarding('login');
            setPage('onboarding');
          }}
          onSignUp={() => {
            setAfterOnboarding('signup');
            setPage('onboarding');
          }}
        />
      );

    case 'onboarding':
      return <Onboarding onFinish={() => setPage(afterOnboarding)} />;

    // Login және Sign Up беттері дайын болғанша уақытша экран
    default:
      return (
        <View style={styles.temp}>
          <StatusBar style="dark" />
          <Text style={styles.tempText}>Бет: {page}</Text>
        </View>
      );
  }
}

const styles = StyleSheet.create({
  temp: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tempText: {
    color: colors.text,
    fontSize: 18,
  },
});