import React, { useState } from 'react';

import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme';

const tabBarImage = require('../../assets/images/tab-bar.png'); // 393x58

type Props = {
  onBack: () => void; // стрелка немесе Home иконкасы басылғанда Home-ға қайту
};

// Ең көп іздегендер тізімі
const topSearches = [
  'Bed',
  'Lamp',
  'Plastic Plants',
  'Carpet',
  'Sofa',
  'Blue Chairs',
];

export default function Search({ onBack }: Props) {
  const [query, setQuery] = useState('');

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        {/* Тақырып пен артқа қайту стрелкасы */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Search</Text>
          <Pressable style={styles.backButton} onPress={onBack}>
            <Ionicons name="arrow-back-outline" size={26} color={colors.text} />
          </Pressable>
        </View>

        {/* Іздеу жолы және оң жақтағы фильтр батырмасы */}
        <View style={styles.searchBox}>
          <TextInput
            style={styles.searchInput}
            value={query}
            onChangeText={setQuery}
            placeholder="Search"
            placeholderTextColor={colors.text}
            returnKeyType="search"
            onSubmitEditing={() => console.log('Іздеу:', query)}
          />

          <Pressable
            style={styles.filterButton}
            onPress={() => console.log('Фильтр басылды')}
          >
            <Ionicons name="options-outline" size={16} color={colors.text} />
          </Pressable>
        </View>

        {/* Top Searches */}
        <Text style={styles.sectionTitle}>Top Searches</Text>

        {topSearches.map((item) => (
          <Pressable
            key={item}
            style={styles.item}
            onPress={() => setQuery(item)}
          >
            <View style={styles.itemIcon}>
              <Ionicons name="search-outline" size={16} color={colors.text} />
            </View>
            <Text style={styles.itemText}>{item}</Text>
          </Pressable>
        ))}
      </ScrollView>

      {/* Төменгі мәзір */}
      <View style={styles.tabBarBox}>
        <Image source={tabBarImage} style={styles.tabBarImage} />

        <View style={styles.tabRow}>
          {['home', 'list', 'cart', 'orders', 'profile'].map((name) => (
            <Pressable
              key={name}
              style={styles.tabArea}
              onPress={() => {
                // Home иконкасы басылса Home-ға қайтамыз
                if (name === 'home') onBack();
                else console.log('Мәзір басылды:', name);
              }}
            />
          ))}
        </View>
      </View>
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
    paddingBottom: 20,
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
    color: colors.link,
  },
  backButton: {
    width: 44,
    height: 44,
    justifyContent: 'center',
  },

  // Іздеу жолы
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 36,
    marginTop: 14,
    borderWidth: 1,
    borderColor: colors.link,
    borderRadius: 18,
    paddingLeft: 14,
    paddingRight: 4,
  },
  searchInput: {
    flex: 1,
    fontSize: 11,
    color: colors.text,
  },
  filterButton: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Top Searches
  sectionTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: colors.link,
    marginTop: 30,
    marginBottom: 12,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 36,
    backgroundColor: colors.secondary,
    borderRadius: 18,
    paddingLeft: 4,
    marginBottom: 14,
  },
  itemIcon: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemText: {
    fontSize: 12,
    fontWeight: '500',
    color: colors.text,
    marginLeft: 14,
  },

  // Төменгі мәзір
  tabBarBox: {
    width: '100%',
    aspectRatio: 393 / 58,
    backgroundColor: colors.white,
    marginBottom: 16,
  },
  tabBarImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  tabRow: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: 'row',
    paddingHorizontal: '9%',
  },
  tabArea: {
    flex: 1,
  },
});