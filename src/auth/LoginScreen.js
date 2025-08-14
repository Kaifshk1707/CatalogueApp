import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
  Image,
} from "react-native";

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        padding: 20,
        backgroundColor: "#45C7CF",
      }}
    >
      {/* Title */}
      <Image
        source={require("./../assets/images/nikitaLogo.jpeg")}
        style={{
          width: 200, // bigger size
          height: 200,
          // marginBottom: 30, // more space below
          alignSelf: "center", // center horizontally
        }}
        resizeMode="contain" // keeps aspect ratio without stretching
      />

      {/* Username Input */}
      <TextInput
        placeholder="Username"
        placeholderTextColor="#888"
        value={username}
        onChangeText={setUsername}
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          padding: 14,
          marginBottom: 15,
          borderRadius: 8,
          backgroundColor: "#E3F7F8",
          fontSize: 16,
          color: "#333",
        }}
      />

      {/* Password Input */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          borderWidth: 1,
          borderColor: "#ccc",
          borderRadius: 8,
          backgroundColor: "#E3F7F8",
          marginBottom: 15,
          paddingRight: 10,
        }}
      >
        <TextInput
          placeholder="Password"
          placeholderTextColor="#888"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
          style={{
            flex: 1,
            padding: 14,
            fontSize: 16,
            color: "#333",
            backgroundColor:"#E3F7F8"
          }}
        />
        <Pressable onPress={() => setShowPassword(!showPassword)}>
          <Text style={{ color: "#45C7CF", fontWeight: "600" }}>
            {showPassword ? "Hide" : "Show"}
          </Text>
        </Pressable>
      </View>

      {/* Login Button */}
      <TouchableOpacity
        style={{
          backgroundColor: "#111111",
          padding: 15,
          borderRadius: 8,
          shadowColor: "#000",
          shadowOpacity: 0.1,
          shadowRadius: 4,
          elevation: 3,
        }}
        onPress={() => navigation.replace("ProductList")}
      >
        <Text
          style={{
            color: "#45C7CF",
            textAlign: "center",
            fontWeight: "700",
            fontSize: 16,
          }}
        >
          Login
        </Text>
      </TouchableOpacity>

      {/* Signup Option */}
      <Text
        style={{
          marginTop: 20,
          textAlign: "center",
          color: "#555",
          fontSize: 16,
        }}
      >
        Don't have an account?{" "}
        <Text
          style={{
            color: "#111111",
            fontWeight: "600",
            fontSize: 16,
            marginLeft: 5,
            textDecorationLine: "underline",
          }}
          onPress={() => navigation.navigate("SignUp")}
        >
          Sign Up
        </Text>
      </Text>
    </View>
  );
}
