import { View, Text, Image } from "react-native";

export default function NotificationItem({ avatar, message }) {
  return (
    <View className="flex-row items-center p-3 border-b border-gray-200 bg-white">
      <Image source={{ uri: avatar }} className="w-10 h-10 rounded-full mr-3" />
      <Text className="flex-1 text-gray-800">{message}</Text>
    </View>
  );
}
