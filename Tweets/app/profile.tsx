import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList, ScrollView } from "react-native";
import { Link } from "expo-router";
import Header from "../components/Header";

const userProfile = {
  name: "Eduardo Pessoa",
  handle: "eduardopessoa",
  bio: "Desenvolvedor React Native | Estudante de Programação Mobile 📱\n🎯 Apaixonado por tecnologia e inovação",
  avatar: "https://i.pravatar.cc/150",
  coverImage: "https://images.unsplash.com/photo-1557683316-973673baf926?w=400&h=200",
  followers: 1245,
  following: 389,
  tweets: 127,
  location: "São Paulo, Brasil",
  joinDate: "Entrou em março de 2020"
};

const userTweets = [
  { id: "1", text: "Aprendendo React Native na aula! 🚀 A cada dia me surpreendo mais com as possibilidades do desenvolvimento mobile.", time: "1h", likes: 23, retweets: 5, comments: 8 },
  { id: "2", text: "Clone do Twitter ficando incrível! 💙 Obrigado professor pela aula incrível sobre Expo e React Native.", time: "3h", likes: 45, retweets: 12, comments: 15 },
  { id: "3", text: "Expo é uma ferramenta incrível para desenvolvimento mobile. Facilita muito o processo de criação de apps! #ReactNative #Expo", time: "1d", likes: 78, retweets: 23, comments: 20 },
  { id: "4", text: "Estudando TypeScript e me apaixonando cada vez mais pela tipagem estática. A produtividade aumenta muito! 💻", time: "2d", likes: 34, retweets: 8, comments: 12 },
];

function ProfileTweet({ text, time, likes, retweets, comments }: any) {
  return (
    <View style={styles.tweetContainer}>
      <Text style={styles.tweetText}>{text}</Text>
      <View style={styles.tweetStats}>
        <Text style={styles.tweetTime}>{time}</Text>
        <View style={styles.statsRow}>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.stat}>💬 {comments}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.stat}>🔄 {retweets}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.stat}>❤️ {likes}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.stat}>📤</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Header title="Perfil" />
      
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Cover Image */}
        <View style={styles.coverImageContainer}>
          <Image source={{ uri: userProfile.coverImage }} style={styles.coverImage} />
          <View style={styles.coverOverlay} />
        </View>
        
        {/* Profile Info */}
        <View style={styles.profileInfo}>
          <View style={styles.avatarContainer}>
            <Image source={{ uri: userProfile.avatar }} style={styles.profileAvatar} />
            <View style={styles.avatarBorder} />
          </View>
          
          <View style={styles.actionButtonsContainer}>
            <TouchableOpacity style={styles.editButton}>
              <Text style={styles.editButtonText}>✏️ Editar perfil</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.followButton}>
              <Text style={styles.followButtonText}>Seguir</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.userDetails}>
            <Text style={styles.userName}>{userProfile.name}</Text>
            <Text style={styles.userHandle}>@{userProfile.handle}</Text>
            
            <Text style={styles.userBio}>{userProfile.bio}</Text>
            
            <View style={styles.metaInfo}>
              <Text style={styles.metaText}>📍 {userProfile.location}</Text>
              <Text style={styles.metaText}>📅 {userProfile.joinDate}</Text>
            </View>
            
            <View style={styles.statsContainer}>
              <TouchableOpacity style={styles.statItem}>
                <Text style={styles.statNumber}>{userProfile.following}</Text>
                <Text style={styles.statLabel}>Seguindo</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.statItem}>
                <Text style={styles.statNumber}>{userProfile.followers}</Text>
                <Text style={styles.statLabel}>Seguidores</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        
        {/* Navigation Tabs */}
        <View style={styles.tabsContainer}>
          <TouchableOpacity style={[styles.tab, styles.activeTab]}>
            <Text style={[styles.tabText, styles.activeTabText]}>Tweets</Text>
            <Text style={styles.tabCount}>{userProfile.tweets}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>Mídia</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>Curtidas</Text>
          </TouchableOpacity>
        </View>
        
        {/* Tweets */}
        {userTweets.map((tweet) => (
          <ProfileTweet key={tweet.id} {...tweet} />
        ))}
        
        {/* Back Button */}
        <View style={styles.backButtonContainer}>
          <Link href="/" asChild>
            <TouchableOpacity style={styles.backButton}>
              <Text style={styles.backButtonText}>⬅️ Voltar ao Início</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  coverImageContainer: {
    position: "relative",
  },
  coverImage: {
    width: "100%",
    height: 200,
  },
  coverOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.2)",
  },
  profileInfo: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#e1e8ed",
  },
  avatarContainer: {
    position: "relative",
    alignSelf: "flex-start",
  },
  profileAvatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: "#fff",
    marginTop: -50,
  },
  avatarBorder: {
    position: "absolute",
    width: 108,
    height: 108,
    borderRadius: 54,
    borderWidth: 2,
    borderColor: "#e1e8ed",
    top: -52,
    left: -4,
  },
  actionButtonsContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: -30,
    marginBottom: 10,
  },
  editButton: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#1da1f2",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
  },
  editButtonText: {
    color: "#1da1f2",
    fontWeight: "bold",
    fontSize: 14,
  },
  followButton: {
    backgroundColor: "#1da1f2",
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
  },
  followButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
  },
  userDetails: {
    marginTop: 10,
  },
  userName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#14171a",
    marginBottom: 2,
  },
  userHandle: {
    fontSize: 16,
    color: "#657786",
    marginBottom: 15,
  },
  userBio: {
    fontSize: 15,
    color: "#14171a",
    marginBottom: 15,
    lineHeight: 22,
  },
  metaInfo: {
    flexDirection: "row",
    marginBottom: 15,
    flexWrap: "wrap",
  },
  metaText: {
    fontSize: 14,
    color: "#657786",
    marginRight: 15,
    marginBottom: 5,
  },
  statsContainer: {
    flexDirection: "row",
  },
  statItem: {
    marginRight: 25,
    flexDirection: "row",
    alignItems: "baseline",
  },
  statNumber: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#14171a",
    marginRight: 5,
  },
  statLabel: {
    fontSize: 14,
    color: "#657786",
  },
  tabsContainer: {
    flexDirection: "row",
    backgroundColor: "#f8f9fa",
    borderBottomWidth: 1,
    borderBottomColor: "#e1e8ed",
  },
  tab: {
    flex: 1,
    paddingVertical: 15,
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: "transparent",
  },
  activeTab: {
    borderBottomColor: "#1da1f2",
  },
  tabText: {
    fontSize: 15,
    color: "#657786",
    fontWeight: "500",
  },
  activeTabText: {
    color: "#1da1f2",
    fontWeight: "bold",
  },
  tabCount: {
    fontSize: 12,
    color: "#657786",
    marginTop: 2,
  },
  tweetContainer: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#e1e8ed",
    backgroundColor: "#fff",
  },
  tweetText: {
    fontSize: 15,
    color: "#14171a",
    lineHeight: 22,
    marginBottom: 12,
  },
  tweetStats: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  tweetTime: {
    fontSize: 13,
    color: "#657786",
  },
  statsRow: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "flex-end",
  },
  actionButton: {
    marginLeft: 20,
    padding: 5,
  },
  stat: {
    fontSize: 13,
    color: "#657786",
  },
  backButtonContainer: {
    padding: 20,
    backgroundColor: "#f8f9fa",
  },
  backButton: {
    backgroundColor: "#1da1f2",
    padding: 15,
    borderRadius: 25,
    alignItems: "center",
  },
  backButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});