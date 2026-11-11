import React, { useState } from 'react';
import {
  Modal, View, Text, TouchableOpacity, StyleSheet, Pressable, ScrollView,
} from 'react-native';
import Slider from '@react-native-community/slider';

type Props = {
  visible: boolean;
  onClose: () => void;
  onApply?: (filters: {
    price: number;
    category: string | null;
    product: string | null;
    color: string | null;
  }) => void;
};

const CATEGORIES = ['Bedroom', 'Living Room', 'Kitchen', 'Office', 'Dining Room'];
const PRODUCTS = ['Sofa', 'Tables', 'Cupboards', 'Office Chairs', 'Desktop Lamp', 'Puff Chair', 'Decor', 'Nightstand'];
const COLORS = ['#B7A3FF', '#A6C1FF', '#00BCD4', '#EF6C14', '#2B2B2B', '#DDD5D3'];

export default function Filter({ visible, onClose, onApply }: Props) {
  const [price, setPrice] = useState(500);
  const [category, setCategory] = useState<string | null>('Kitchen');
  const [product, setProduct] = useState<string | null>('Cupboards');
  const [color, setColor] = useState<string | null>(COLORS[1]);

  const Chip = ({ label, active, onPress }: { label: string; active: boolean; onPress: () => void }) => (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.chip, active && styles.chipActive]}
    >
      <Text style={[styles.chipText, active && styles.chipTextActive]}>{label}</Text>
    </TouchableOpacity>
  );

  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
      {/* Қараңғы фон: басқанда жабылады */}
      <Pressable style={styles.backdrop} onPress={onClose} />

      <View style={styles.sheet}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.title}>Filter</Text>

          {/* Price Range */}
          <Text style={styles.section}>Price Range</Text>
          <Slider
            minimumValue={100}
            maximumValue={1500}
            step={10}
            value={price}
            onValueChange={setPrice}
            minimumTrackTintColor="#F4B5A4"
            maximumTrackTintColor="#FAEFE4"
            thumbTintColor="#F4B5A4"
          />
          <View style={styles.priceRow}>
            {['$100', '$500', '$1000', '$1500'].map((p) => (
              <Text key={p} style={styles.priceLabel}>{p}</Text>
            ))}
          </View>
          <Text style={styles.currentPrice}>Selected: ${Math.round(price)}</Text>

          {/* Categories */}
          <Text style={styles.section}>Categories</Text>
          <View style={styles.wrap}>
            {CATEGORIES.map((c) => (
              <Chip key={c} label={c} active={category === c} onPress={() => setCategory(c)} />
            ))}
          </View>

          {/* Products */}
          <Text style={styles.section}>Products</Text>
          <View style={styles.wrap}>
            {PRODUCTS.map((p) => (
              <Chip key={p} label={p} active={product === p} onPress={() => setProduct(p)} />
            ))}
          </View>

          {/* Colors */}
          <Text style={styles.section}>Colors</Text>
          <View style={styles.colorsRow}>
            {COLORS.map((c) => (
              <TouchableOpacity
                key={c}
                onPress={() => setColor(c)}
                style={[styles.colorRing, color === c && styles.colorRingActive]}
              >
                <View style={[styles.colorDot, { backgroundColor: c }]} />
              </TouchableOpacity>
            ))}
          </View>

          {/* Apply */}
          <TouchableOpacity
            style={styles.applyBtn}
            onPress={() => {
              onApply?.({ price, category, product, color });
              onClose();
            }}
          >
            <Text style={styles.applyText}>Apply</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdrop: { flex: 1, backgroundColor: 'rgba(0,0,0,0.25)' },
  sheet: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 30,
    maxHeight: '85%',
  },
  title: { textAlign: 'center', fontSize: 20, fontWeight: '600', color: '#D4795F', marginBottom: 16 },
  section: { fontSize: 16, fontWeight: '600', color: '#D4795F', marginTop: 18, marginBottom: 10 },
  priceRow: { flexDirection: 'row', justifyContent: 'space-between' },
  priceLabel: { fontSize: 12, color: '#333' },
  currentPrice: { fontSize: 12, color: '#D4795F', marginTop: 6 },
  wrap: { flexDirection: 'row', flexWrap: 'wrap', gap: 10 },
  chip: { backgroundColor: '#FAEFE4', paddingHorizontal: 16, paddingVertical: 6, borderRadius: 20 },
  chipActive: { backgroundColor: '#F4B5A4' },
  chipText: { fontSize: 12, color: '#E9C9BC' },
  chipTextActive: { color: '#fff' },
  colorsRow: { flexDirection: 'row', justifyContent: 'space-between' },
  colorRing: {
    width: 38, height: 38, borderRadius: 19,
    alignItems: 'center', justifyContent: 'center',
    borderWidth: 1.5, borderColor: 'transparent',
  },
  colorRingActive: { borderColor: '#333' },
  colorDot: { width: 32, height: 32, borderRadius: 16 },
  applyBtn: {
    marginTop: 30, alignSelf: 'center',
    backgroundColor: '#F4B5A4', paddingHorizontal: 60, paddingVertical: 12, borderRadius: 25,
  },
  applyText: { color: '#fff', fontSize: 16, fontWeight: '600' },
});