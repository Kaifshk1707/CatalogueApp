import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

const { width } = Dimensions.get("window");

export default function ProductDetailsScreen({ route, navigation }) {
  const { product } = route.params;

  return (
    <View style={{ flex: 1, backgroundColor: "#F7F8FC" }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Product Image with Floating Back Button */}
        <View style={{ position: "relative" }}>
          <Image
            source={{ uri: product.image }}
            style={{
              width: width,
              height: 350,
              borderBottomLeftRadius: 30,
              borderBottomRightRadius: 30,
            }}
            resizeMode="cover"
          />

          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              position: "absolute",
              top: 40,
              left: 20,
              backgroundColor: "rgba(0,0,0,0.4)",
              padding: 10,
              borderRadius: 50,
            }}
          >
            <Ionicons name="arrow-back" size={22} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* Product Details */}
        <View
          style={{
            backgroundColor: "#fff",
            margin: 20,
            padding: 20,
            borderRadius: 20,
            shadowColor: "#000",
            shadowOpacity: 0.1,
            shadowRadius: 8,
            elevation: 5,
          }}
        >
          {/* Name */}
          <Text
            style={{
              fontSize: 26,
              fontWeight: "700",
              color: "#333",
              marginBottom: 10,
            }}
          >
            {product.name}
          </Text>

          {/* Price */}
          <Text
            style={{
              fontSize: 22,
              fontWeight: "bold",
              color: "#45C7CF",
              marginBottom: 15,
            }}
          >
            {product.price}
          </Text>

          {/* Description */}
          <Text
            style={{
              fontSize: 15,
              lineHeight: 22,
              color: "#666",
              marginBottom: 20,
            }}
          >
            This is a beautifully crafted {product.name} made with premium
            quality materials. Perfect for special occasions or everyday wear.
            Designed to make you stand out.
          </Text>

          
        </View>
      </ScrollView>
    </View>
  );
}
