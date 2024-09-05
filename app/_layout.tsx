import store from "@/store/auth/store";
import { Stack } from "expo-router";
import { Provider } from "react-redux"

export default function RootLayout() {
  return (

   <Provider store={store}>
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
   </Provider>
  );
}
