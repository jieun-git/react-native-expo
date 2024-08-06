import { Text, TouchableOpacity, View } from "react-native";
import { router } from "expo-router";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const ShoppingScreen = () => {
  return (
    <View>
      <Text>Shopping screen</Text>
      <TouchableOpacity
        onPress={() => {
          router.navigate({
            pathname: "browser",
          });
        }}
      >
        <Text>Go TO Browser</Text>
      </TouchableOpacity>
      <MaterialCommunityIcons name="shopping" size={50} color="skyblue" />
    </View>
  );
};

export default ShoppingScreen;
