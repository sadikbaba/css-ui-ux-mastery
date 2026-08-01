import {
  View,
  Text,
  Image,
  StyleSheet,
  Linking,
  Pressable,
} from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
          }}
          style={styles.avatar}
        />

        <Text style={styles.name}>Abubakar Rabiu Baba</Text>
        <Text style={styles.title}>Frontend Developer</Text>

        <Text style={styles.bio}>
          I am a frontend developer with a particular interest in making things
          simple and automating daily tasks.
        </Text>

        <View style={styles.links}>
          <Pressable onPress={() => Linking.openURL("https://github.com")}>
            <Text style={styles.link}>GitHub</Text>
          </Pressable>

          <Pressable onPress={() => Linking.openURL("https://linkedin.com")}>
            <Text style={styles.link}>LinkedIn</Text>
          </Pressable>

          <Pressable onPress={() => Linking.openURL("https://twitter.com")}>
            <Text style={styles.link}>Twitter</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 30,
    alignItems: "center",
    width: "100%",
    maxWidth: 360,
    // Shadow for iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    // Shadow for Android
    elevation: 5,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 65,
    marginBottom: 20,
  },
  name: {
    fontSize: 22,
    fontWeight: "700",
    color: "#1a1a1a",
    marginBottom: 6,
  },
  title: {
    fontSize: 15,
    color: "#555",
    marginBottom: 16,
  },
  bio: {
    fontSize: 14,
    color: "#333",
    textAlign: "center",
    lineHeight: 22,
    marginBottom: 24,
  },
  links: {
    flexDirection: "row",
    gap: 16,
  },
  link: {
    color: "#2563eb",
    fontSize: 15,
    fontWeight: "500",
  },
});
