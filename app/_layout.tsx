import { Stack } from "expo-router"; // Stack 은 기본 스크린 한 개

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="browser" />
    </Stack>
  );
}
