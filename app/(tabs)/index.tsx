import { SafeAreaView, StyleSheet, Platform, StatusBar } from "react-native";
import WebView from "react-native-webview";
import { router } from "expo-router";

const styles = StyleSheet.create({
  safearea: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
  },
});

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.safearea}>
      <WebView
        source={{ uri: "https://m.naver.com" }}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        onShouldStartLoadWithRequest={(request) => {
          console.log("Home -request", request);

          if (
            request.url.startsWith("https://m.naver.com") ||
            request.mainDocumentURL?.startsWith("https://m.naver.com")
          ) {
            return true;
          }
          if (request.url != null && request.url.startsWith("https://")) {
            router.navigate({
              pathname: "browser",
            });
            return false;
          }

          return true;
        }}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
