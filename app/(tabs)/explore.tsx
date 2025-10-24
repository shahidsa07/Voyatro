
import { StyleSheet, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function ExploreScreen() {
  const router = useRouter();

  const handlePress = (category: string) => {
    router.push(`/category/${category}`);
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Categories</ThemedText>
      <Pressable style={styles.category} onPress={() => handlePress('bus')}>
        <ThemedText>Bus</ThemedText>
      </Pressable>
      <Pressable style={styles.category} onPress={() => handlePress('traveller')}>
        <ThemedText>Traveller</ThemedText>
      </Pressable>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  category: {
    padding: 16,
    marginVertical: 8,
    backgroundColor: '#eee',
    borderRadius: 8,
  },
});
