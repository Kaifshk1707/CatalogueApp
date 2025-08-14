import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

export default function ProductCard({ product, onPress }) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: '#E3F7F8',
        borderRadius: 10,
        padding: 10,
        flex: 1,
        marginRight: 8,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3
      }}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Image
        source={{ uri: product.image }}
        style={{
          width: '100%',
          height: 120,
          borderRadius: 8,
          marginBottom: 8
        }}
      />
      <Text style={{ fontSize: 16, fontWeight: '600', color: '#333' }}>
        {product.name}
      </Text>
      <Text style={{ fontSize: 14, color: '#9FA8DA', fontWeight: '700', marginTop: 4 }}>
        {product.price}
      </Text>
    </TouchableOpacity>
  );
}
