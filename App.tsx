import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Launch from './src/components/Launch';
import Welcome from './src/components/Welcome';
import Onboarding from './src/components/Onboarding';
import Login from './src/components/Login';
import SignUp from './src/components/SignUp';
import ForgotPassword from './src/components/Forgotpassword';
import SetPassword from './src/components/Setpassword';
import { colors } from './src/theme';

// Бет түрлері. Жаңа бет қосқанда осында атын қосамыз.
type Page =
  | 'launch'
  | 'welcome'
  | 'onboarding'
  | 'login'
  | 'signup'
  | 'forgot'
  | 'setPassword'
  | 'home';

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

    case 'login':
      return (
        <Login
          onBack={() => setPage('welcome')}
          onLogin={() => setPage('home')}
          onSignUp={() => setPage('signup')}
          onForgotPassword={() => setPage('forgot')}
        />
      );

    case 'signup':
      return (
        <SignUp
          onBack={() => setPage('welcome')}
          onSignUp={() => setPage('home')}
          onLogin={() => setPage('login')}
        />
      );

    // Құпия сөзді қалпына келтіру: Login -> forgot -> setPassword -> Login
    case 'forgot':
      return (
        <ForgotPassword
          onBack={() => setPage('login')}
          onNext={() => setPage('setPassword')}
        />
      );

    case 'setPassword':
      return (
        <SetPassword
          onBack={() => setPage('forgot')}
          onReset={() => setPage('login')}
        />
      );

    // Басты бет дайын болғанша уақытша экран
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