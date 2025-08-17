import { useEffect, useState } from "react";
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
import { getRequest } from "../api/apiService";

export default function ProductListScreen({ navigation }) {
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [all, setAll] = useState([]);
  const [gold, setGold] = useState([]);
  const [diamond, setDiamond] = useState([]);
  const [silver, setSilver] = useState([]);
  const [platinum, setPlatinum] = useState([]);
  const categories = ["All", "Gold", "Diamond", "Silver", "Platinum"];


  const fetchAll = async () => {
    try {
      const data = await getRequest("all");
      setAll(data);
    } catch (error) {
      console.log("API call failed:", error.message);
    }
  }

  const fetchGold = async () => {
    try {
      const data = await getRequest("gold");
      setGold(data);
    } catch (error) {
      console.log("API call failed:", error.message);
    }
  };

  const fetchDiamond = async () => {
    try {
      const data = await getRequest("diamond");
      setDiamond(data);
    } catch (error) {
      console.log("API call failed:", error.message);
    }
  };

  const fetchSilver = async () => {
    try {
      const data = await getRequest("silver");
      setSilver(data);
    } catch (error) {
      console.log("API call failed:", error.message);
    }
  };

  const fetchPlatinum = async () => {
    try {
      const data = await getRequest("platinum");
      setPlatinum(data);
    } catch (error) {
      console.log("API call failed:", error.message);
    }
  };

  useEffect(() => {
    fetchAll();
    fetchGold();
    fetchDiamond();
    fetchSilver();
    fetchPlatinum();
  }, []);

  //  Search + Category Filter
  let categoryData = [];
  if (selectedCategory === "All") {
    categoryData = all;
  } else if (selectedCategory === "Gold") {
    categoryData = gold;
  } else if (selectedCategory === "Diamond") {
    categoryData = diamond;
  } else if (selectedCategory === "Silver") {
    categoryData = silver;
  } else if (selectedCategory === "Platinum") {
    categoryData = platinum;
  }

  // 🔑 Apply Search Filter also
  const filteredProducts = categoryData.filter((item) =>
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
        // paddingHorizontal: 15,
        paddingTop: 10,
      }}
    >
      {/* Header */}
      <HeaderComponent />

      {/* Banner Component */}
      <BannerComponent />

      {/* Product Grid */}
      <View style={{
        flex: 1, 
        width: "100%",
        borderTopWidth: 2,
        borderTopColor: "#45CFC7",
      }}>
        <FlatList
          data={filteredProducts}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <ProductCard
              product={item}
              onPress={() =>
                navigation.navigate("ProductDetails", { product: item })
              }
            />
          )}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: "space-between", marginTop: 15, marginHorizontal: 10 }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}
