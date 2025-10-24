
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useRouter } from 'expo-router';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      <ThemedView style={styles.searchContainer}>
        <View>
          <ThemedText type="default" darkColor="black">Continue your search</ThemedText>
          <ThemedText type="title" darkColor="black">to Wayanad</ThemedText>
        </View>
        <TouchableOpacity>
          <Text style={styles.arrow}>→</Text>
        </TouchableOpacity>
      </ThemedView>

      <View style={styles.categories}>
      <TouchableOpacity style={styles.category} onPress={() => router.push('/category/bus')}>
          <Image source={{ uri: 'https://img.icons8.com/ios-filled/50/E24A4A/bus.png' }} style={styles.categoryIcon} />
          <ThemedText darkColor='black'>BUS/TRAVELLER</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.category} onPress={() => router.push('/category/holiday-packages')}>
          <Image source={{ uri: 'https://img.icons8.com/ios-filled/50/E24A4A/beach.png' }} style={styles.categoryIcon} />
          <ThemedText darkColor='black'>HOLIDAY PACKAGES</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.category} onPress={() => router.push('/category/resorts')}>
          <Image source={{ uri: 'https://img.icons8.com/ios-filled/50/E24A4A/building.png' }} style={styles.categoryIcon} />
          <ThemedText darkColor='black'>RESORTS</ThemedText>
        </TouchableOpacity>
        {/* <TouchableOpacity style={styles.category}>
          <Image source={{ uri: 'https://img.icons8.com/ios-filled/50/E24A4A/train.png' }} style={styles.categoryIcon} />
          <ThemedText darkColor='black'>TRAINS/BUS</ThemedText>
        </TouchableOpacity> */}
      </View>

      <View style={styles.tabs}>
        <TouchableOpacity style={[styles.tab, styles.activeTab]}>
          <Text style={styles.activeTabText}>All Offers</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>Hotels</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>Holidays</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>Bus</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.offers}>
        <View style={[styles.offerCard, { backgroundColor: '#4A90E2' }]}>
          <View style={styles.offerHeader}>
            <ThemedText type="defaultSemiBold">HOLIDAYS</ThemedText>
            <ThemedText type="default">22H:30M</ThemedText>
          </View>
          <Image source={{ uri: 'https://static.vecteezy.com/system/resources/thumbnails/012/955/346/small/traveling-and-holiday-background-free-vector.jpg' }} style={styles.offerImage} />
          <View style={styles.offerDetails}>
            <View style={styles.offerLogos}>
                <Image source={{ uri: 'https://i.imgur.com/2Y3tW6b.png' }} style={styles.offerLogo} />
                <Image source={{ uri: 'https://i.imgur.com/sC6a7Vp.png' }} style={styles.offerLogo} />
            </View>
            <ThemedText type="subtitle">GET 10% OFF</ThemedText>
            <ThemedText type="default">On all Domestic hotels - On all Credit & Debit cards</ThemedText>
          </View>
        </View>
        <View style={[styles.offerCard, { backgroundColor: '#E24A4A' }]}>
          <View style={styles.offerHeader}>
            <ThemedText type="defaultSemiBold">FLIGHTS</ThemedText>
          </View>
           <Image source={{ uri: 'https://i.imgur.com/sC6a7Vp.png' }} style={styles.offerLogo} />
          <View style={styles.offerDetails}>
            <ThemedText type="subtitle">GET 10% OFF</ThemedText>
            <ThemedText type="default">On Air Asia flights credit cards</ThemedText>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40
  },
  searchContainer: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
  },
  arrow: {
    fontSize: 24,
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
    backgroundColor: '#fff',
  },
  category: {
    alignItems: 'center',
  },
  categoryIcon: {
      width:40,
      height:40,
      marginBottom: 5,
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#F2F2F2',
  },
  tab: {
    padding: 10,
    borderRadius: 20,
  },
  activeTab: {
    backgroundColor: '#007AFF',
  },
  tabText: {
    color: '#000',
  },
  activeTabText: {
    color: '#fff',
  },
  offers: {
    padding: 20,
  },
  offerCard: {
    borderRadius: 20,
    marginBottom: 20,
    padding: 20,
  },
  offerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  offerImage: {
    width: '100%',
    height: 150,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  offerDetails: {
    // No specific styles needed here for now
  },
   offerLogos: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  offerLogo: {
    width: 30,
    height: 30,
    marginRight: 10,
    resizeMode: 'contain',
  },
});
