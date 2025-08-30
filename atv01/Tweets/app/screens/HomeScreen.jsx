import { View, FlatList } from "react-native";
import Header from "../../components/Header";
import TweetCard from "../../components/TweetCard";

const mockTweets = [
  { id: "1", user: { name: "Ana", avatar: "https://i.pravatar.cc/100" }, handle: "ana", time: "2h", text: "Meu primeiro tweet clone!" },
  { id: "2", user: { name: "Carlos", avatar: "https://i.pravatar.cc/200" }, handle: "carlos", time: "4h", text: "Testando Expo + Gluestack 🚀" },
];

export default function HomeScreen() {
  return (
    <View className="flex-1 bg-gray-100">
      <Header title="Início" />
      <FlatList
        data={mockTweets}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TweetCard {...item} />}
      />
    </View>
  );
}
