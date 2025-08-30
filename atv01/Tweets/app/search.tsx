import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { Link } from "expo-router";
import Header from "../components/Header";
import { useState } from "react";

const trendingTopics = [
  { id: "1", hashtag: "#ReactNative", category: "Tecnologia", tweets: "12.5K", trending: true },
  { id: "2", hashtag: "#Expo", category: "Programação", tweets: "8.2K", trending: true },
  { id: "3", hashtag: "#JavaScript", category: "Tecnologia", tweets: "45.7K", trending: false },
  { id: "4", hashtag: "#TypeScript", category: "Programação", tweets: "23.1K", trending: true },
  { id: "5", hashtag: "#Flutter", category: "Mobile", tweets: "15.9K", trending: false },
  { id: "6", hashtag: "#iOS", category: "Mobile", tweets: "67.3K", trending: true },
];

const suggestedUsers = [
  { id: "1", name: "React Native", handle: "reactnative", verified: true, followers: "2.1M" },
  { id: "2", name: "Expo", handle: "expo", verified: true, followers: "156K" },
  { id: "3", name: "JavaScript", handle: "javascript", verified: false, followers: "890K" },
];

const recentSearches = [
  { id: "1", query: "React Native tutorial" },
  { id: "2", query: "Expo Router" },
  { id: "3", query: "#TypeScript" },
];

function TrendingItem({ hashtag, category, tweets, trending }: any) {
  return (
    <TouchableOpacity style={styles.trendingItem}>
      <View style={styles.trendingContent}>
        <View style={styles.trendingHeader}>
          <Text style={styles.categoryText}>{category} • Trending</Text>
          {trending && (
            <View style={styles.hotBadge}>
              <Text style={styles.hotText}>🔥 HOT</Text>
            </View>
          )}
        </View>
        <Text style={styles.hashtag}>{hashtag}</Text>
        <Text style={styles.tweetCount}>{tweets} Tweets</Text>
      </View>
      <TouchableOpacity style={styles.moreButton}>
        <Text style={styles.moreText}>⋯</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

function SuggestedUser({ name, handle, verified, followers }: any) {
  return (
    <View style={styles.userItem}>
      <View style={styles.userInfo}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{name.charAt(0)}</Text>
        </View>
        <View style={styles.userDetails}>
          <View style={styles.userNameRow}>
            <Text style={styles.userName}>{name}</Text>
            {verified && <Text style={styles.verified}>✓</Text>}
          </View>
          <Text style={styles.userHandle}>@{handle} • {followers} seguidores</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.followButton}>
        <Text style={styles.followButtonText}>Seguir</Text>
      </TouchableOpacity>
    </View>
  );
}

function RecentSearch({ query }: any) {
  return (
    <TouchableOpacity style={styles.recentItem}>
      <Text style={styles.searchIcon}>🔍</Text>
      <Text style={styles.searchQuery}>{query}</Text>
      <TouchableOpacity style={styles.removeButton}>
        <Text style={styles.removeText}>✕</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

export default function SearchScreen() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <View style={styles.container}>
      <Header title="Explorar" />
      
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Search Input */}
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar no Twitter..."
            placeholderTextColor="#657786"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        <View style={styles.content}>
          {/* Recent Searches */}
          {searchQuery === "" && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Buscas recentes</Text>
              {recentSearches.map((search) => (
                <RecentSearch key={search.id} {...search} />
              ))}
              <View style={styles.divider} />
            </View>
          )}

          {/* Trending Topics */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Trending para você</Text>
              <TouchableOpacity>
                <Text style={styles.seeMore}>Ver mais</Text>
              </TouchableOpacity>
            </View>
            {trendingTopics.map((topic) => (
              <TrendingItem key={topic.id} {...topic} />
            ))}
          </View>

          <View style={styles.divider} />

          {/* Suggested Users */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Quem seguir</Text>
            {suggestedUsers.map((user) => (
              <SuggestedUser key={user.id} {...user} />
            ))}
          </View>

          {/* Quick Actions */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Ações rápidas</Text>
            <View style={styles.quickActions}>
              <TouchableOpacity style={styles.actionButton}>
                <Text style={styles.actionText}>📱 Tecnologia</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton}>
                <Text style={styles.actionText}>⚽ Esportes</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.quickActions}>
              <TouchableOpacity style={styles.actionButton}>
                <Text style={styles.actionText}>🎵 Música</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton}>
                <Text style={styles.actionText}>🎬 Filmes</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Back Button */}
          <View style={styles.backContainer}>
            <Link href="/" asChild>
              <TouchableOpacity style={styles.backButton}>
                <Text style={styles.backButtonText}>⬅️ Voltar ao Início</Text>
              </TouchableOpacity>
            </Link>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f8fa",
  },
  scrollView: {
    flex: 1,
  },
  searchContainer: {
    padding: 15,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#e1e8ed",
  },
  searchInput: {
    backgroundColor: "#f5f8fa",
    padding: 15,
    borderRadius: 25,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#e1e8ed",
  },
  content: {
    padding: 15,
  },
  section: {
    marginBottom: 20,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#14171a",
  },
  seeMore: {
    fontSize: 14,
    color: "#1da1f2",
    fontWeight: "500",
  },
  divider: {
    height: 1,
    backgroundColor: "#e1e8ed",
    marginVertical: 20,
  },
  trendingItem: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#e1e8ed",
    flexDirection: "row",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  trendingContent: {
    flex: 1,
  },
  trendingHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  categoryText: {
    fontSize: 12,
    color: "#657786",
    fontWeight: "500",
  },
  hotBadge: {
    backgroundColor: "#e53e3e",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
    marginLeft: 8,
  },
  hotText: {
    fontSize: 10,
    color: "#fff",
    fontWeight: "bold",
  },
  hashtag: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1da1f2",
    marginBottom: 5,
  },
  tweetCount: {
    fontSize: 12,
    color: "#657786",
  },
  moreButton: {
    padding: 8,
  },
  moreText: {
    fontSize: 16,
    color: "#657786",
  },
  userItem: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#e1e8ed",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  avatar: {
    width: 48,
    height: 48,
    backgroundColor: "#1da1f2",
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  avatarText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
  userDetails: {
    flex: 1,
  },
  userNameRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  userName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#14171a",
  },
  verified: {
    fontSize: 14,
    color: "#1da1f2",
    marginLeft: 5,
  },
  userHandle: {
    fontSize: 14,
    color: "#657786",
    marginTop: 2,
  },
  followButton: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#1da1f2",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
  },
  followButtonText: {
    color: "#1da1f2",
    fontWeight: "bold",
    fontSize: 14,
  },
  recentItem: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: "#e1e8ed",
    flexDirection: "row",
    alignItems: "center",
  },
  searchIcon: {
    fontSize: 16,
    color: "#657786",
    marginRight: 12,
  },
  searchQuery: {
    fontSize: 16,
    color: "#14171a",
    flex: 1,
  },
  removeButton: {
    padding: 4,
  },
  removeText: {
    fontSize: 16,
    color: "#657786",
  },
  quickActions: {
    flexDirection: "row",
    marginBottom: 10,
  },
  actionButton: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#657786",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
    flex: 1,
    alignItems: "center",
  },
  actionText: {
    color: "#657786",
    fontWeight: "500",
    fontSize: 14,
  },
  backContainer: {
    marginTop: 20,
    padding: 15,
    backgroundColor: "#f5f8fa",
    borderRadius: 10,
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