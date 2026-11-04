import React from 'react';

import { Pressable, StyleSheet, Text, View } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme';

// "or sign up with" жазуы және Facebook, Google белгілері
export default function SocialButtons() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>or sign up with</Text>

      <View style={styles.row}>
        <Pressable
          style={styles.circle}
          onPress={() => console.log('Facebook басылды')}
        >
          <Ionicons name="logo-facebook" size={18} color={colors.text} />
        </Pressable>

        <Pressable
          style={styles.circle}
          onPress={() => console.log('Google басылды')}
        >
          <Ionicons name="logo-google" size={16} color={colors.text} />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: {
    fontSize: 11,
    color: colors.text,
  },
  row: {
    flexDirection: 'row',
    marginTop: 12,
  },
  circle: {
    width: 34,
    height: 34,
    borderRadius: 17,
    borderWidth: 1,
    borderColor: colors.text,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
  },
});