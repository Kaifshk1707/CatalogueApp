import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function ProductDetailsScreen({ route, navigation }) {
  const { product } = route.params;

  return (
    <View style={{ flex: 1, backgroundColor: '#F7F8FC' }}>
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        
        {/* Product Image */}
        <Image
          source={{ uri: product.image }}
          style={{
            width: '100%',
            height: 300,
            borderRadius: 15,
            marginBottom: 20,
            shadowColor: '#000',
            shadowOpacity: 0.15,
            shadowRadius: 8,
            elevation: 5
          }}
          resizeMode="cover"
        />

        {/* Product Name */}
        <Text style={{
          fontSize: 26,
          fontWeight: '700',
          color: '#333',
          marginBottom: 8
        }}>
          {product.name}
        </Text>

        {/* Product Price */}
        <Text style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: '#9FA8DA',
          marginBottom: 15
        }}>
          {product.price}
        </Text>

        {/* Product Description */}
        <Text style={{
          fontSize: 15,
          lineHeight: 22,
          color: '#555'
        }}>
          This is a beautifully crafted {product.name} made with premium quality materials.
          Perfect for special occasions or everyday wear. Designed to make you stand out.
        </Text>

        {/* Back Button */}
        <TouchableOpacity
          style={{
            backgroundColor: '#9FA8DA',
            padding: 15,
            borderRadius: 8,
            marginTop: 30,
            shadowColor: '#000',
            shadowOpacity: 0.1,
            shadowRadius: 4,
            elevation: 3
          }}
          // onPress={() => navigation.goBack()}
          onPress={() => navigation.navigate('Categories')}
          
          activeOpacity={0.8}
        >
          <Text style={{
            color: '#fff',
            textAlign: 'center',
            fontWeight: '700',
            fontSize: 16
          }}>
            Back
          </Text>
        </TouchableOpacity>

      </ScrollView>
    </View>
  );
}
