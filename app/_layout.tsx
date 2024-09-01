import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{
      headerStyle: {
        backgroundColor: 'green',
      },
      headerTintColor: 'red',
      headerTitleStyle: {
        fontWeight: 'bold',
      }
    }}>
      <Stack.Screen name="Home" />
      <Stack.Screen name="About" />
    </Stack>
  );
}
