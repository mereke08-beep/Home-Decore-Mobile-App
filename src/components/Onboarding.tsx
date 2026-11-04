import React, { useState } from 'react';

import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';

import { StatusBar } from 'expo-status-bar';
import { colors } from '../theme';

type Props = {
  onFinish: () => void; // "Get Started" басылғанда шақырылады
};

// 4 беттің деректері: сурет, тақырып, мәтін
const slides = [
  {
    image: require('../../assets/onboarding-1.png'),
    title: 'Confortable Space',
  },
  {
    image: require('../../assets/onboarding-2.png'),
    title: 'Modern Design',
  },
  {
    image: require('../../assets/onboarding-3.png'),
    title: 'Styled Living',
  },
  {
    image: require('../../assets/onboarding-4.png'),
    title: 'Relaxing Furniture',
  },
];

const description =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

export default function Onboarding({ onFinish }: Props) {
  // Қазір қай бет көрінетінін білдіреді: 0, 1, 2 немесе 3
  const [index, setIndex] = useState(0);

  const { height } = useWindowDimensions();

  const isLast = index === slides.length - 1;
  const currentSlide = slides[index];

  const handleNext = () => {
    if (isLast) {
      onFinish(); // соңғы бетте "Get Started" басылса, келесі бетке өтеміз
    } else {
      setIndex(index + 1); // әйтпесе келесі onboarding бетіне
    }
  };

  // Skip басылса, бірден 4-ші (соңғы) бетке өтеді
  const handleSkip = () => {
    setIndex(slides.length - 1);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      {/* Фото блогы: экран биіктігінің жартысынан сәл көбі */}
      <View style={{ height: height * 0.52 }}>
        {/* Фотоның астындағы ашық қызғылт жолақ */}
        <View style={styles.peachShape} />

        <Image source={currentSlide.image} style={styles.photo} />

        {/* Skip тек 1-3 беттерде көрінеді */}
        {!isLast && (
          <Pressable style={styles.skipButton} onPress={handleSkip}>
            <Text style={styles.skipText}>Skip →</Text>
          </Pressable>
        )}
      </View>

      <Text style={styles.title}>{currentSlide.title}</Text>
      <Text style={styles.description}>{description}</Text>

      {/* Төменгі жол: нүктелер және Next батырмасы */}
      <View style={styles.bottomRow}>
        <View style={styles.dotsRow}>
          {slides.map((_, dotIndex) => (
            <View
              key={dotIndex}
              style={[styles.dot, dotIndex === index && styles.dotActive]}
            />
          ))}
        </View>

        <Pressable style={styles.nextButton} onPress={handleNext}>
          <Text style={styles.nextButtonText}>
            {isLast ? 'Get Started' : 'Next'}
          </Text>
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
  peachShape: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: -22,
    height: 70,
    backgroundColor: colors.secondary,
    borderBottomLeftRadius: 40,
  },
  photo: {
    width: '100%',
    height: '100%',
    borderBottomLeftRadius: 40,
  },
  skipButton: {
    position: 'absolute',
    top: 52,
    right: 24,
  },
  skipText: {
    fontSize: 13,
    color: colors.text,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.primary,
    textAlign: 'center',
    marginTop: 64,
  },
  description: {
    fontSize: 12,
    color: colors.text,
    textAlign: 'center',
    lineHeight: 17,
    paddingHorizontal: 32,
    marginTop: 16,
  },
  bottomRow: {
    position: 'absolute',
    bottom: 40,
    left: 28,
    right: 28,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dotsRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dot: {
    width: 8,
    height: 6,
    borderRadius: 3,
    backgroundColor: colors.secondary,
    marginRight: 6,
  },
  dotActive: {
    width: 28,
    backgroundColor: colors.primary,
  },
  nextButton: {
    backgroundColor: colors.primary,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 28,
  },
  nextButtonText: {
    color: colors.primaryDark,
    fontSize: 15,
    fontWeight: '700',
  },
});