import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React from "react";
const { height, width } = Dimensions.get("window");
const SplashThree = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#45C7CF",
      }}
    >
      {/* Logo / Icon */}
      <Image
        source={require("./../assets/images/nikitaLogo.jpeg")}
        style={{
          width: width * 0.6,
          height: height * 0.3,
          marginBottom: -40,
        }}
        resizeMode="contain"
      />

      <View
        style={{
          padding: 20,
          borderRadius: 10,
        }}
      >
        <Text
          style={{
            fontSize: 26,
            fontWeight: "bold",
            color: "#111111",
            textAlign: "center",
            marginBottom: 10,
          }}
        >
          Jewelry Tailored for Every Occasion
        </Text>
        <Text
          style={{
            fontSize: 22,
            color: "#111111",
            textAlign: "center",
            lineHeight: 22,
          }}
        >
          From weddings and proposals to anniversaries and devotional events
        </Text>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate("Login")}
        style={{
          position: "absolute",
          bottom: 40,
          right: 20,
          zIndex: 1,
          backgroundColor: "#45C7CF",
          paddingVertical: 4,
          paddingHorizontal: 16,
          borderRadius: 20,
        }}
      >
        <Text
          style={{
            color: "#111111",
            fontSize: 26,
            fontWeight: "bold",
            textDecorationLine: "underline",
          }}
        >
          Next
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SplashThree;
