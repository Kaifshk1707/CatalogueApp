import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

export default function CategoriesScreen({ navigation }) {
  const categories = [
    { id: "1", name: "Gold", image: "https://via.placeholder.com/300x200" },
    { id: "2", name: "Diamond", image: "https://via.placeholder.com/300x200" },
    { id: "3", name: "Silver", image: "https://via.placeholder.com/300x200" },
    { id: "4", name: "Platinum", image: "https://via.placeholder.com/300x200" },
  ];

  const renderCategory = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate("Rates", { category: item })}
      style={{
        backgroundColor: "#fff",
        borderRadius: 20,
        marginBottom: 20,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 4,
        width: (width - 50) / 2,
        overflow: "hidden",
      }}
    >
      <Image
        source={{ uri: item.image }}
        style={{
          width: "100%",
          height: 120,
        }}
        resizeMode="cover"
      />
      <View style={{ padding: 12, alignItems: "center" }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "600",
            color: "#333",
          }}
        >
          {item.name}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1, backgroundColor: "#F7F8FC", padding: 20 }}>
      {/* Header */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginBottom: "5%",
          marginTop: "5%",
          backgroundColor: "#45C7CF",
          padding: "2%",
          borderRadius: 5,
          marginTop: "6%"
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            backgroundColor: "rgba(0,0,0,0.4)",
            padding: 8,
            borderRadius: 50,
            marginRight: 10,
          }}
        >
          <Ionicons name="arrow-back" size={22} color="#fff" />
        </TouchableOpacity>

        <Text
          style={{
            fontSize: 26,
            fontWeight: "700",
            color: "#333",
          }}
        >
          Categories
        </Text>
      </View>

      {/* Category Grid */}
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={renderCategory}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
