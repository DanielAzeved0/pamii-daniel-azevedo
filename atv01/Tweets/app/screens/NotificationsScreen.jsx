import { View, FlatList } from "react-native";
import Header from "../../components/Header";
import NotificationItem from "../../components/NotificationItem";

const mockNotifications = [
  { id: "1", avatar: "https://i.pravatar.cc/150", message: "João curtiu seu tweet" },
  { id: "2", avatar: "https://i.pravatar.cc/250", message: "Maria retweetou seu post" },
];

export default function NotificationsScreen() {
  return (
    <View className="flex-1 bg-gray-100">
      <Header title="Notificações" />
      <FlatList
        data={mockNotifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <NotificationItem {...item} />}
      />
    </View>
  );
}
