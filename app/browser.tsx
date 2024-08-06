import {
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  SafeAreaView,
  View,
} from "react-native";
import { useLocalSearchParams } from "expo-router";
import WebView from "react-native-webview";
import { useMemo, useState } from "react";

const styles = StyleSheet.create({
  safearea: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
    backgroundColor: "black",
  },
  urlContainer: {
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 5,
  },
  urlText: {
    color: "white",
  },
});

const BrowserScreen = () => {
  const params = useLocalSearchParams();
  const initialUrl = params.initialUrl as string;

  const [url, setUrl] = useState(initialUrl);
  const urlTitle = useMemo(
    () => url.replace("https://", "").split("/")[0],
    [url],
  );

  return (
    <SafeAreaView style={styles.safearea}>
      <View style={styles.urlContainer}>
        <Text style={styles.urlText}>{urlTitle}</Text>
      </View>
      <WebView
        source={{ uri: initialUrl }}
        onNavigationStateChange={(event) => setUrl(event.url)}
      />
    </SafeAreaView>
  );
};

export default BrowserScreen;
