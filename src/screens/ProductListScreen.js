import { useState } from "react";
import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ProductCard from "../components/ProductCard";
import BannerComponent from "../components/BannerComponent";
import products from "../LocalData/products";

export default function ProductListScreen({ navigation }) {
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Gold", "Diamond", "Silver", "Platinum"];

  //  Search + Category Filter
  const filteredProducts = products.filter(
    (item) =>
      (selectedCategory === "All" ||
        item.name.toLowerCase().includes(selectedCategory.toLowerCase())) &&
      item.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const HeaderComponent = () => {
    return (
      <>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#45C7CF",
            padding: "2%",
            borderRadius: 5,
            marginTop: "6%"
          }}
        >
          <TouchableOpacity onPress={() => setShowDropdown(!showDropdown)}>
            <Ionicons name="menu" size={28} color="#333" />
          </TouchableOpacity>

          <Image
            source={require("./../assets/images/Nikita_Icon.png")}
            style={{ width: 60, height: 60 }}
          />
          <TouchableOpacity onPress={() => setSearchVisible(!searchVisible)}>
            <Ionicons name="search" size={28} color="#333" />
          </TouchableOpacity>
        </View>

        {/* Dropdown List */}
        {showDropdown && (
          <View
            style={{
              backgroundColor: "#E3F7F8",
              paddingVertical: 8,
              borderRadius: 12,
              marginTop: 6,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.1,
              shadowRadius: 4,
              elevation: 3,
            }}
          >
            {categories.map((category) => (
              <TouchableOpacity
                key={category}
                onPress={() => {
                  setSelectedCategory(category);
                  setShowDropdown(false);
                }}
                style={{
                  paddingVertical: 10,
                  paddingHorizontal: 14,
                  borderBottomWidth: 0.6,
                  borderBottomColor: "#C9E7E8",
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: selectedCategory === category ? "600" : "400",
                    color: selectedCategory === category ? "#007B83" : "#333",
                    letterSpacing: 0.3,
                  }}
                >
                  {category}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        {/* Search Bar */}
        {searchVisible && (
          <TextInput
            value={searchText}
            onChangeText={setSearchText}
            placeholder="Search products..."
            placeholderTextColor="#888"
            style={{
              fontSize: 16,
              color: "#333",
              backgroundColor: "#E3F7F8",
              paddingHorizontal: 15,
              paddingVertical: 8,
              borderWidth: 1,
              borderColor: "#ddd",
              borderRadius: 8,
              marginTop: 10,
            }}
          />
        )}
      </>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 15,
        paddingTop: 20,
      }}
    >
      {/* Header */}
      <HeaderComponent />

      {/* Banner Component */}
      <BannerComponent />

      {/* Product Grid */}
      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductCard
            product={item}
            onPress={() =>
              navigation.navigate("ProductDetails", { product: item })
            }
          />
        )}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between", marginTop: 15 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
