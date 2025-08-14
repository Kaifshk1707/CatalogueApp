import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

export default function CategoryCard({ category, onPress }) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 12,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 2
      }}
      onPress={onPress}
      activeOpacity={0.8}
    >
      {/* Category Image */}
      <Image
        source={{ uri: category.image }}
        style={{
          width: 100,
          height: 100,
          borderRadius: 50,
          marginBottom: 10
        }}
      />

      {/* Category Name */}
      <Text style={{
        fontSize: 16,
        fontWeight: '600',
        color: '#333'
      }}>
        {category.name}
      </Text>
    </TouchableOpacity>
  );
}
