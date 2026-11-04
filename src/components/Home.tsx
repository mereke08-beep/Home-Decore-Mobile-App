import React from 'react';

import { Image, Pressable, ScrollView, StyleSheet, View } from 'react-native';

import { StatusBar } from 'expo-status-bar';
import { colors } from '../theme';

// Figma-дан экспортталған төрт сурет (assets/images/ папкасында тұруы керек)
const headerImage = require('../../assets/images/header.png'); // 393x373: Hi Welcome Back + баннер + Categories
const bestSellerImage = require('../../assets/images/best-seller.png'); // 393x207
const newCollectionImage = require('../../assets/images/new-collection.png'); // 393x303
const tabBarImage = require('../../assets/images/tab-bar.png'); // 393x58

type Props = {
  onSearch: () => void; // лупа басылғанда Search бетіне өту
};

export default function Home({ onSearch }: Props) {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* 1. Жоғарғы бөлік: сәлемдесу, лупа, баннер, категориялар */}
        <View style={styles.headerBox}>
          <Image source={headerImage} style={styles.headerImage} />

          {/* Лупа батырмасы суреттің үстінде көрінбейтін басылатын аймақ */}
          <Pressable
            style={styles.searchArea}
            onPress={onSearch}
          />
        </View>

        {/* 2. Best Seller */}
        <View style={styles.bestSellerBox}>
          <Image source={bestSellerImage} style={styles.bestSellerImage} />

          {/* Shop Now батырмасының аймағы */}
          <Pressable
            style={styles.shopArea}
            onPress={() => console.log('Shop Now басылды')}
          />
        </View>

        {/* 3. New Collection */}
        <Image source={newCollectionImage} style={styles.newCollectionImage} />
      </ScrollView>

      {/* 4. Төменгі мәзір: 5 иконка, әрқайсысы бөлек басылады */}
      <View style={styles.tabBarBox}>
        <Image source={tabBarImage} style={styles.tabBarImage} />

        <View style={styles.tabRow}>
          {['home', 'list', 'cart', 'orders', 'profile'].map((name) => (
            <Pressable
              key={name}
              style={styles.tabArea}
              onPress={() => console.log('Мәзір басылды:', name)}
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
    paddingTop: 36, // статус бардың орны
    paddingBottom: 12,
  },

  // Header (393 x 373)
  headerBox: {
    width: '100%',
    aspectRatio: 393 / 373,
  },
  headerImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  // лупа: суреттің оң жақ жоғарғы бұрышында
  searchArea: {
    position: 'absolute',
    right: '4%',
    top: '8%',
    width: '10%',
    height: '10%',
  },

  // Best Seller (393 x 207)
  bestSellerBox: {
    width: '100%',
    aspectRatio: 393 / 207,
  },
  bestSellerImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  // Shop Now: сол жақ төменгі бөлікте
  shopArea: {
    position: 'absolute',
    left: '36%',
    top: '79%',
    width: '16%',
    height: '16%',
  },

  // New Collection (393 x 303)
  newCollectionImage: {
    width: '100%',
    aspectRatio: 393 / 303,
    resizeMode: 'contain',
  },

  // Tab bar (393 x 58)
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