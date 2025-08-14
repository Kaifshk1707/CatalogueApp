import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

export default function SelectionListScreen({ navigation }) {
  return (
    <View style={{
      flex: 1,
      backgroundColor: '#F7F8FC',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 20
    }}>
      
      {/* Placeholder Image */}
      <Image
        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/4076/4076549.png' }}
        style={{ width: 120, height: 120, marginBottom: 20, opacity: 0.8 }}
      />

      {/* Title */}
      <Text style={{
        fontSize: 24,
        fontWeight: '700',
        color: '#333',
        marginBottom: 8
      }}>
        My Selection List
      </Text>

      {/* Subtitle */}
      <Text style={{
        fontSize: 16,
        color: '#777',
        textAlign: 'center',
        marginBottom: 25
      }}>
        You haven’t selected any items yet.
      </Text>

      {/* Action Button */}
      <TouchableOpacity
        style={{
          backgroundColor: '#9FA8DA',
          paddingHorizontal: 25,
          paddingVertical: 12,
          borderRadius: 8,
          shadowColor: '#000',
          shadowOpacity: 0.1,
          shadowRadius: 4,
          elevation: 3
        }}
        onPress={() => navigation.navigate('ProductList')}
        activeOpacity={0.8}
      >
        <Text style={{
          color: '#fff',
          fontSize: 16,
          fontWeight: '600'
        }}>
          Browse Products
        </Text>
      </TouchableOpacity>

    </View>
  );
}
