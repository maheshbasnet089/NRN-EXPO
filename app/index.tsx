import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="text-red-400 bg-red-300">Bye World.</Text>
      <Link href={
        {
          pathname :"/auth/register", 
          
        }
      }>Go to Register</Link>
      <Link href={
        {
          pathname :"/auth/login", 
          
        }
      }>Go to Login</Link>
    </View>
  );
}
