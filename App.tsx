import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { SelectPhoneApi } from "./src/ex1/SelectPhoneApi";
import { BottomTabApp } from "./src/ex3/BottomTabApp";
import { colors } from "./src/theme";

export default function App() {
  // Mặc định hiển thị Bài 3 (Bottom Tab), hoàn toàn dùng MockAPI
  const [activeTab, setActiveTab] = useState<"ex1_2" | "ex3">("ex3");

  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <SafeAreaView style={styles.container} edges={["top"]}>
        <StatusBar style="dark" />

        {/* Thanh chọn bài tập (Không còn dữ liệu offline, 100% MockAPI) */}
        <View style={styles.menuBar}>
          <Pressable
            style={[styles.tabBtn, activeTab === "ex1_2" && styles.tabBtnActive]}
            onPress={() => setActiveTab("ex1_2")}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === "ex1_2" && styles.tabTextActive,
              ]}
            >
              Bài 1 + 2: Select Phone (API)
            </Text>
          </Pressable>

          <Pressable
            style={[styles.tabBtn, activeTab === "ex3" && styles.tabBtnActive]}
            onPress={() => setActiveTab("ex3")}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === "ex3" && styles.tabTextActive,
              ]}
            >
              Bài 3: Bottom Tab
            </Text>
          </Pressable>
        </View>

        {/* Nội dung bài tập */}
        <View style={styles.content}>
          {activeTab === "ex1_2" ? <SelectPhoneApi /> : <BottomTabApp />}
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F5F7",
  },
  menuBar: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: colors.line,
    gap: 8,
  },
  tabBtn: {
    flex: 1,
    paddingVertical: 9,
    alignItems: "center",
    borderRadius: 6,
    backgroundColor: "#F4F5F7",
  },
  tabBtnActive: {
    backgroundColor: colors.red,
  },
  tabText: {
    fontSize: 13,
    fontWeight: "600",
    color: colors.muted,
  },
  tabTextActive: {
    color: "#FFFFFF",
    fontWeight: "700",
  },
  content: {
    flex: 1,
  },
});
