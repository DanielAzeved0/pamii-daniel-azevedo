import { View, TextInput, Pressable, Text, Image } from "react-native";

export default function ComposeTweetScreen() {
  return (
    <View className="flex-1 bg-white p-4">
      <View className="flex-row">
        <Image source={{ uri: "https://i.pravatar.cc/300" }} className="w-10 h-10 rounded-full mr-3" />
        <TextInput
          className="flex-1 text-lg"
          placeholder="O que está acontecendo?"
          multiline
        />
      </View>

      <Pressable className="mt-4 self-end bg-blue-500 px-4 py-2 rounded-full">
        <Text className="text-white font-bold">Tweetar</Text>
      </Pressable>
    </View>
  );
}
