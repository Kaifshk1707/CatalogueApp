import { View, Text, TouchableOpacity } from "react-native";

export default function RatesScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#F7F8FC",
        padding: 20,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Title */}
      <Text
        style={{
          fontSize: 26,
          fontWeight: "700",
          color: "#333",
          marginBottom: 20,
        }}
      >
        Today's Rates
      </Text>

      {/* Rate Card */}
      <TouchableOpacity
        style={{
          backgroundColor: "#fff",
          borderRadius: 12,
          padding: 20,
          width: "90%",
          shadowColor: "#000",
          shadowOpacity: 0.1,
          shadowRadius: 6,
          elevation: 4,
        }}
        onPress={() => navigation.navigate("SelectionList")}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: "600",
            color: "#444",
            marginBottom: 12,
          }}
        >
          Gold:{" "}
          <Text style={{ color: "#9FA8DA", fontWeight: "700" }}>
            ₹5,800 / gram
          </Text>
        </Text>

        <Text
          style={{
            fontSize: 18,
            fontWeight: "600",
            color: "#444",
          }}
        >
          Diamond:{" "}
          <Text style={{ color: "#9FA8DA", fontWeight: "700" }}>
            ₹70,000 / carat
          </Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}
