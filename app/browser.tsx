import {
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  SafeAreaView,
  View,
  Animated,
  TouchableOpacity,
} from "react-native";
import { useLocalSearchParams } from "expo-router";
import WebView from "react-native-webview";
import { useMemo, useState, useRef } from "react";
import { router } from "expo-router";

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
  loadingBarBackground: {
    height: 3,
    backgroundColor: "white",
  },
  loadingBar: {
    height: "100%",
    backgroundColor: "green",
  },
  navigator: {
    backgroundColor: "black",
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 40,
    justifyContent: "space-between",
  },
  button: {
    width: 30,
    height: 30,
    padding: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  naverIconOutline: {
    borderWidth: 1,
    borderColor: "white",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  naverIconText: {
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

  const progressAnim = useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaView style={styles.safearea}>
      <View style={styles.urlContainer}>
        <Text style={styles.urlText}>{urlTitle}</Text>
      </View>
      <View style={styles.loadingBarBackground}>
        <Animated.View
          style={[
            styles.loadingBar,
            {
              width: progressAnim.interpolate({
                // 0 ~ 1 로 들어오는 progress 상태를 0% ~ 100% 로 표출
                inputRange: [0, 1],
                outputRange: ["0%", "100%"],
              }),
            },
          ]}
        />
      </View>
      <WebView
        source={{ uri: initialUrl }}
        onNavigationStateChange={(event) => setUrl(event.url)}
        onLoadProgress={(event) =>
          progressAnim.setValue(event.nativeEvent.progress)
        }
        onLoadEnd={() => progressAnim.setValue(0)}
      />
      <View style={styles.navigator}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            router.back();
          }}
        >
          <View style={styles.naverIconOutline}>
            <Text style={styles.naverIconText}>N</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default BrowserScreen;
