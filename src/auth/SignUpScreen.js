import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
  Image,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { Ionicons } from "@expo/vector-icons";

export default function SignUpScreen({ navigation }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const passwordValue = watch("password");

  const onSubmit = (data) => {
    console.log("SignUp Data:", data);
    navigation.replace("ProductList");
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        padding: 20,
        backgroundColor: "#45C7CF",
      }}
    >
      {/* Title / Logo */}
      <Image
        source={require("./../assets/images/nikitaLogo.jpeg")}
        style={{
          width: 200,
          height: 200,
          alignSelf: "center",
          marginBottom: 20,
        }}
        resizeMode="contain"
      />

      {/* Username */}
      <Controller
        control={control}
        name="username"
        rules={{
          required: "Username is required",
          minLength: { value: 4, message: "Minimum 4 characters" },
          maxLength: { value: 20, message: "Maximum 20 characters" },
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Username"
            placeholderTextColor="#888"
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            style={{
              borderWidth: 1,
              borderColor: errors.username ? "red" : "#ccc",
              padding: 14,
              marginBottom: 5,
              borderRadius: 8,
              backgroundColor: "#E3F7F8",
              fontSize: 16,
              color: "#333",
            }}
          />
        )}
      />
      {errors.username && (
        <Text style={{ color: "red", marginBottom: 10 }}>
          {errors.username.message}
        </Text>
      )}

      {/* Password */}
      <Controller
        control={control}
        name="password"
        rules={{
          required: "Password is required",
          minLength: { value: 6, message: "Minimum 6 characters" },
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              borderWidth: 1,
              borderColor: errors.password ? "red" : "#ccc",
              borderRadius: 8,
              backgroundColor: "#E3F7F8",
              marginBottom: 5,
              paddingRight: 10,
            }}
          >
            <TextInput
              placeholder="Password"
              placeholderTextColor="#888"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              secureTextEntry={!showPassword}
              style={{
                flex: 1,
                padding: 14,
                fontSize: 16,
                color: "#333",
              }}
            />
            <Pressable onPress={() => setShowPassword(!showPassword)}>
              <Ionicons
                name={showConfirmPassword ? "eye" : "eye-off"}
                size={24}
                color="#45C7CF"
              />
            </Pressable>
          </View>
        )}
      />
      {errors.password && (
        <Text style={{ color: "red", marginBottom: 10 }}>
          {errors.password.message}
        </Text>
      )}

      {/* Confirm Password */}
      <Controller
        control={control}
        name="confirmPassword"
        rules={{
          required: "Confirm Password is required",
          validate: (value) =>
            value === passwordValue || "Passwords do not match",
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              borderWidth: errors.confirmPassword ? 2 : 1,
              borderColor: errors.confirmPassword ? "red" : "#ccc",
              borderRadius: 8,
              backgroundColor: "#E3F7F8",
              marginBottom: 5,
              paddingRight: 10,
            }}
          >
            <TextInput
              placeholder="Confirm Password"
              placeholderTextColor="#888"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              secureTextEntry={!showConfirmPassword}
              style={{
                flex: 1,
                padding: 14,
                fontSize: 16,
                color: "#333",
              }}
            />

            <Pressable onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
              <Ionicons
                name={showConfirmPassword ? "eye" : "eye-off"}
                size={24}
                color="#45C7CF"
              />
            </Pressable>
          </View>
        )}
      />
      {errors.confirmPassword && (
        <Text style={{ color: "red", marginBottom: 10 }}>
          {errors.confirmPassword.message}
        </Text>
      )}

      {/* Sign Up Button */}
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
        onPress={handleSubmit(onSubmit)}
      >
        <Text
          style={{
            color: "#45C7CF",
            textAlign: "center",
            fontWeight: "700",
            fontSize: 16,
          }}
        >
          Sign Up
        </Text>
      </TouchableOpacity>

      {/* Login Option */}
      <Text
        style={{
          marginTop: 20,
          textAlign: "center",
          color: "#555",
          fontSize: 16,
        }}
      >
        Already have an account?{" "}
        <Text
          style={{
            color: "#111111",
            fontWeight: "600",
            fontSize: 16,
            textDecorationLine: "underline",
          }}
          onPress={() => navigation.navigate("Login")}
        >
          Login
        </Text>
      </Text>
    </View>
  );
}
