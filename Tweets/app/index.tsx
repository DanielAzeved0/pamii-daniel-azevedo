import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { Link } from "expo-router";
import Header from "../components/Header";

const mockTweets = [
  { 
    id: "1", 
    user: { name: "Ana (Ex do Igor)", avatar: "https://i.pravatar.cc/100" }, 
    handle: "ana_silva", 
    time: "2h", 
    text: "Eu amo o Igor💙",
    likes: 12,
    retweets: 3,
    comments: 5
  },
  { 
    id: "2", 
    user: { name: "Carlos Eduardo", avatar: "https://i.pravatar.cc/200" }, 
    handle: "carlos_dev", 
    time: "4h", 
    text: "Testando Expo + React Native 🚀 A experiência de desenvolvimento está incrível!",
    likes: 28,
    retweets: 8,
    comments: 12
  },
  { 
    id: "3", 
    user: { name: "Marina Costa", avatar: "https://i.pravatar.cc/300" }, 
    handle: "marina_tech", 
    time: "6h", 
    text: "Acabei de publicar um artigo sobre TypeScript! Quem mais está aprendendo? #TypeScript #JavaScript",
    likes: 45,
    retweets: 15,
    comments: 8
  },
  { 
    id: "4", 
    user: { name: "Rafael Santos", avatar: "https://i.pravatar.cc/400" }, 
    handle: "rafa_code", 
    time: "8h", 
    text: "Dica do dia: sempre use componentes reutilizáveis! Isso vai economizar muito tempo no futuro 💡",
    likes: 67,
    retweets: 23,
    comments: 18
  }
];

function TweetCard({ user, handle, time, text, likes, retweets, comments }: any) {
  return (
    <View style={styles.tweetCard}>
      <View style={styles.tweetContent}>
        <Image source={{ uri: user.avatar }} style={styles.avatar} />
        <View style={styles.tweetBody}>
          <View style={styles.tweetHeader}>
            <Text style={styles.userName}>{user.name}</Text>
            <Text style={styles.handleAndTime}>@{handle} · {time}</Text>
          </View>
          <Text style={styles.tweetText}>{text}</Text>
          
          {/* Tweet Actions */}
          <View style={styles.tweetActions}>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionIcon}>💬</Text>
              <Text style={styles.actionCount}>{comments}</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionIcon}>🔄</Text>
              <Text style={styles.actionCount}>{retweets}</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionIcon}>❤️</Text>
              <Text style={styles.actionCount}>{likes}</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionIcon}>📤</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Header title="Início" />
      
      {/* Navigation Buttons */}
      <View style={styles.navigationButtons}>
        <Link href="/profile" asChild>
          <TouchableOpacity style={styles.navButton}>
            <Text style={styles.navButtonText}>👤 Perfil</Text>
          </TouchableOpacity>
        </Link>
        
        <Link href="/search" asChild>
          <TouchableOpacity style={styles.navButton}>
            <Text style={styles.navButtonText}>🔍 Buscar</Text>
          </TouchableOpacity>
        </Link>
      </View>

      {/* Tweet Composer */}
      <View style={styles.tweetComposer}>
        <View style={styles.composerContent}>
          <Image 
            source={{ uri: "https://i.pravatar.cc/50" }} 
            style={styles.composerAvatar}
          />
          <View style={styles.composerBody}>
            <Text style={styles.composerPlaceholder}>O que está acontecendo?</Text>
            <View style={styles.composerActions}>
              <View style={styles.composerIcons}>
                <Text style={styles.composerIcon}>📷</Text>
                <Text style={styles.composerIcon}>📊</Text>
                <Text style={styles.composerIcon}>😊</Text>
                <Text style={styles.composerIcon}>📍</Text>
              </View>
              <TouchableOpacity style={styles.tweetButton}>
                <Text style={styles.tweetButtonText}>Tweetar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      
      {/* Tweets Feed */}
      <FlatList
        data={mockTweets}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TweetCard {...item} />}
        showsVerticalScrollIndicator={false}
        style={styles.feedList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f8fa",
  },
  navigationButtons: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around",
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#e1e8ed",
  },
  navButton: {
    backgroundColor: "#1da1f2",
    paddingHorizontal: 25,
    paddingVertical: 12,
    borderRadius: 25,
    flex: 1,
    marginHorizontal: 5,
    alignItems: "center",
    shadowColor: "#1da1f2",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  navButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
  },
  tweetComposer: {
    backgroundColor: "#fff",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#e1e8ed",
  },
  composerContent: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  composerAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  composerBody: {
    flex: 1,
  },
  composerPlaceholder: {
    fontSize: 16,
    color: "#657786",
    marginBottom: 15,
  },
  composerActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  composerIcons: {
    flexDirection: "row",
  },
  composerIcon: {
    fontSize: 18,
    marginRight: 15,
  },
  tweetButton: {
    backgroundColor: "#1da1f2",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    opacity: 0.7,
  },
  tweetButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
  },
  feedList: {
    flex: 1,
  },
  tweetCard: {
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#e1e8ed",
    padding: 15,
  },
  tweetContent: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
  },
  tweetBody: {
    flex: 1,
  },
  tweetHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  userName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#14171a",
    marginRight: 5,
  },
  handleAndTime: {
    fontSize: 14,
    color: "#657786",
  },
  tweetText: {
    fontSize: 14,
    color: "#14171a",
    lineHeight: 20,
    marginBottom: 12,
  },
  tweetActions: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 8,
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
  },
  actionIcon: {
    fontSize: 14,
    marginRight: 5,
  },
  actionCount: {
    fontSize: 12,
    color: "#657786",
  },
});