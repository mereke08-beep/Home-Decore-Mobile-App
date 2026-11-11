import React, { useState } from 'react';

import {
  KeyboardTypeOptions,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme';

type Props = {
  label: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secure?: boolean; // true болса, құпия сөз өрісі (көзі бар)
  keyboardType?: KeyboardTypeOptions;
  backgroundColor?: string; // инпут фоны (әдепкіде ашық қызғылт)
};

// Бір өріс: жоғарыда атауы, астында енгізу жолы.
// Login және SignUp беттерінде қайталамау үшін бөлек компонент жасалды.
export default function FormInput({
  label,
  placeholder,
  value,
  onChangeText,
  secure = false,
  keyboardType = 'default',
  backgroundColor = colors.secondary,
}: Props) {
  // Құпия сөз жасырылған ба (көз белгісі арқылы ауысады)
  const [hidden, setHidden] = useState(true);

  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>{label}</Text>

      <View style={[styles.inputBox, { backgroundColor }]}>
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={colors.placeholder}
          secureTextEntry={secure && hidden}
          keyboardType={keyboardType}
          autoCapitalize="none"
        />

        {secure && (
          <Pressable onPress={() => setHidden((prev) => !prev)}>
            <Ionicons
              name={hidden ? 'eye-off-outline' : 'eye-outline'}
              size={20}
              color={colors.primary}
            />
          </Pressable>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 14,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.text,
    marginBottom: 6,
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.secondary,
    borderRadius: 24,
    height: 46,
    paddingHorizontal: 18,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: colors.text,
  },
});