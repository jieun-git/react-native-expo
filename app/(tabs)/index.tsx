import {
  Text,
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
} from "react-native";

const styles = StyleSheet.create({
  safearea: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.safearea}>
      <Text>Home screen</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
