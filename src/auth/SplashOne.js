import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  Dimensions
} from "react-native";
import React from "react";
const { height, width } = Dimensions.get("window");
const SplashOne = ({ navigation }) => {
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

       {/* Tagline */}
      <Text
        style={{
          fontSize: 30,
          color: "#111",
          textAlign: "center",
          lineHeight: 40,
          fontWeight: "600",
          letterSpacing: 0.5,
          paddingHorizontal: 10,
        }}
      >
        Handcrafting brilliance since 1998
      </Text>

    
        <TouchableOpacity
               onPress={() => navigation.navigate("SplashTwo")}
              style={{
                position: "absolute",
                bottom: 40,
                  right: 20,
                zIndex: 1,
                //   borderWidth: 1,
                //   borderColor: "#111111",
                backgroundColor: "#45C7CF",
                paddingVertical: 4,
                paddingHorizontal: 16,
                borderRadius: 20,
                //   elevation: 3,
                //   shadowColor: "#000",
                //   shadowOpacity: 0.2,
                //   shadowRadius: 3,
                //   shadowOffset: { width: 0, height: 2 },
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

export default SplashOne;
