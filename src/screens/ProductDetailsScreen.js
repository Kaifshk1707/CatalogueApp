import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

export default function ProductDetailsScreen({ route, navigation }) {
  const { product } = route.params;
  const [status, setStatus] = useState("Ready");

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView showsVerticalScrollIndicator={false} >
        {/* Product Images with Back Button */}
        <View style={{ position: "relative" }}>
          <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
          >
            {[1, 2, 3].map((item, i) => (
              <Image
                key={i}
                // source={{ uri: product.image }}
                source={require("./../assets/images/Img1.jpg")}
                style={{
                  width: width,
                  height: 300,
                }}
                resizeMode="cover"
              />
            ))}
          </ScrollView>

          {/* Back Button */}
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              position: "absolute",
              top: 40,
              left: 20,
              backgroundColor: "rgba(0,0,0,0.6)",
              padding: 10,
              borderRadius: 50,
              elevation: 5,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.3,
              shadowRadius: 3,
            }}
          >
            <Ionicons name="arrow-back" size={22} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* Basic Details */}
        <View style={{ padding: 15, borderTopWidth: 3, borderTopColor: "#45C7CF" }}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            Gold Necklace - 22K
          </Text>
          <Text style={{ fontSize: 14, color: "#555" }}>Category: Necklace</Text>
          <Text style={{ fontSize: 14, color: "#555" }}>
            Location: Mumbai Branch
          </Text>
          <Text
            style={{
              marginTop: 5,
              color: status === "Ready" ? "green" : "red",
              fontWeight: "600",
            }}
          >
            Status: {status === "Ready" ? "Ready (In Store)" : "Sold (Order Only)"}
          </Text>
        </View>

        {/* Price & Weight */}
        <View style={{ paddingHorizontal: 15, marginTop: 10, borderTopWidth: 2.5, borderTopColor: "#45C7CF" }}>
          <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 5 }}>
            Pricing & Weight Details
          </Text>
          <Text>Carat: 22K</Text>
          <Text>Gross Weight: 20 gm</Text>
          <Text>Net Weight: 19.5 gm</Text>
          <Text>Making Charges: ₹5,000</Text>
          <Text>Sale Value: ₹1,20,000</Text>
          <Text>GST: ₹3,600</Text>
          <Text style={{ fontWeight: "bold", marginTop: 5 }}>
            Final Price: ₹1,23,600
          </Text>
        </View>

        {/* Diamond Details */}
        <View style={{ paddingHorizontal: 15, marginTop: 20, borderTopWidth: 2, borderTopColor: "#45C7CF" }}>
          <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 5 }}>
            Diamond Details
          </Text>
          <Text>Shape: Round</Text>
          <Text>Size: 2 mm</Text>
          <Text>Weight: 0.25 ct</Text>
          <Text>Pieces: 10</Text>
          <Text>Color: D</Text>
          <Text>Clarity: VVS1</Text>
          <Text>Rate: ₹50,000/ct</Text>
          <Text>Amount: ₹12,500</Text>
        </View>

        {/* Stone Details */}
        <View style={{ paddingHorizontal: 15, marginTop: 20, borderTopWidth: 1.5, borderBottomWidth: 1, borderTopColor: "#45C7CF", borderBottomColor: "#45C7CF" }}>
          <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 5 }}>
            Stone Details
          </Text>
          <Text>Type: Ruby</Text>
          <Text>Shape: Oval</Text>
          <Text>Weight: 1.5 gm</Text>
          <Text>Carat: 2 ct</Text>
          <Text>Rate: ₹10,000/ct</Text>
          <Text>Amount: ₹20,000</Text>
        </View>

        {/* Actions */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: 30,
            paddingHorizontal: 15,
            marginBottom: 20,
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#45C7CF",
              padding: 12,
              borderRadius: 10,
              flex: 1,
              marginRight: 10,
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#fff", fontWeight: "600" }}>Share</Text>
          </TouchableOpacity>

          {/* <TouchableOpacity
            style={{
              backgroundColor: "#4CAF50",
              padding: 12,
              borderRadius: 10,
              flex: 1,
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#fff", fontWeight: "600" }}>Add to List</Text>
          </TouchableOpacity> */}
        </View>
      </ScrollView>
    </View>
  );
}
