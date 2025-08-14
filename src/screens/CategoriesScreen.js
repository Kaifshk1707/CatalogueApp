import React from 'react';
import { View, FlatList, Text } from 'react-native';
import CategoryCard from '../components/CategoryCard';

export default function CategoriesScreen({ route, navigation }) {
  const categories = [
    { id: '1', name: 'Gold', image: 'https://via.placeholder.com/150' },
    { id: '2', name: 'Diamond', image: 'https://via.placeholder.com/150' },
    { id: '3', name: 'Silver', image: 'https://via.placeholder.com/150' },
    { id: '4', name: 'Platinum', image: 'https://via.placeholder.com/150' },
  ];

  return (
    <View style={{ flex: 1, paddingHorizontal: 15, paddingTop: 20, backgroundColor: '#F7F8FC' }}>
      
      {/* Title */}
      <Text style={{
        fontSize: 24,
        fontWeight: '700',
        color: '#333',
        marginBottom: 15
      }}>
        Categories
      </Text>

      {/* Categories Grid */}
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CategoryCard category={item}  onPress={() => navigation.navigate('Rates')}/>
        )}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between', marginBottom: 15 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
