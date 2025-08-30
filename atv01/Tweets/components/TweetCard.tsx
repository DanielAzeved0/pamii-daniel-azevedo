import { View, Text, Image, Pressable } from "react-native";

export default function TweetCard({ user, handle, time, text }) {
  return (
    <View className="flex-row p-4 border-b border-gray-200 bg-white">
      {/* Avatar */}
      <Image source={{ uri: user.avatar }} className="w-12 h-12 rounded-full mr-3" />

      {/* Conteúdo */}
      <View className="flex-1">
        <View className="flex-row items-center">
          <Text className="font-bold">{user.name}</Text>
          <Text className="text-gray-500 ml-1">@{handle} · {time}</Text>
        </View>
        <Text className="text-gray-800 mt-1">{text}</Text>

        {/* Ações */}
        <View className="flex-row justify-between mt-2">
          <Pressable><Text>💬</Text></Pressable>
          <Pressable><Text>🔁</Text></Pressable>
          <Pressable><Text>❤️</Text></Pressable>
          <Pressable><Text>📤</Text></Pressable>
        </View>
      </View>
    </View>
  );
}
