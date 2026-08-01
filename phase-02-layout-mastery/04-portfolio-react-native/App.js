import { View, Text, StyleSheet, ScrollView, Linking, Pressable } from "react-native";

export default function App() {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>Abubakar Baba</Text>
        <View style={styles.nav}>
          <Text style={styles.navLink}>Projects</Text>
          <Text style={styles.navLink}>About</Text>
          <Text style={styles.navLink}>Contact</Text>
        </View>
      </View>

      {/* Hero */}
      <View style={styles.hero}>
        <Text style={styles.heroTitle}>Hi, I'm Abubakar</Text>
        <Text style={styles.heroText}>
          Frontend Developer who loves building clean and simple websites.
        </Text>
        <Pressable style={styles.btn}>
          <Text style={styles.btnText}>View My Work</Text>
        </Pressable>
      </View>

      {/* Projects */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Projects</Text>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Digital Business Card</Text>
          <Text style={styles.cardText}>
            A clean personal card built with HTML, CSS and React.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Portfolio Website</Text>
          <Text style={styles.cardText}>
            Responsive portfolio using Flexbox and CSS Grid.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Coming Soon</Text>
          <Text style={styles.cardText}>
            More projects will be added here soon.
          </Text>
        </View>
      </View>

      {/* About */}
      <View style={[styles.section, styles.aboutSection]}>
        <Text style={styles.sectionTitle}>About Me</Text>
        <Text style={styles.aboutText}>
          I am a frontend developer learning HTML, CSS, and React. I enjoy
          making websites that look good and work well on all devices.
        </Text>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Contact me: sadikbaba360@gmail.com
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  header: {
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    alignItems: "center",
  },
  logo: {
    fontSize: 22,
    fontWeight: "700",
    color: "#1a1a1a",
    marginBottom: 12,
  },
  nav: {
    flexDirection: "row",
    gap: 20,
  },
  navLink: {
    fontSize: 15,
    color: "#555",
    fontWeight: "500",
  },
  hero: {
    backgroundColor: "#f8f9fa",
    paddingVertical: 50,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: "700",
    color: "#1a1a1a",
    marginBottom: 12,
    textAlign: "center",
  },
  heroText: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
    marginBottom: 24,
    lineHeight: 24,
  },
  btn: {
    backgroundColor: "#2563eb",
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 8,
  },
  btnText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "500",
  },
  section: {
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#1a1a1a",
    textAlign: "center",
    marginBottom: 24,
  },
  card: {
    backgroundColor: "#f8f9fa",
    padding: 24,
    borderRadius: 12,
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1a1a1a",
    marginBottom: 8,
  },
  cardText: {
    fontSize: 14,
    color: "#555",
    lineHeight: 20,
  },
  aboutSection: {
    backgroundColor: "#f8f9fa",
  },
  aboutText: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
    lineHeight: 24,
  },
  footer: {
    paddingVertical: 30,
    borderTopWidth: 1,
    borderTopColor: "#eee",
    alignItems: "center",
  },
  footerText: {
    fontSize: 14,
    color: "#555",
  },
});