import { Text, TouchableOpacity, View } from "react-native";
import { router } from "expo-router";

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
    </View>
  );
};

export default ShoppingScreen;
