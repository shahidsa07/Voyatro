
import { useLocalSearchParams } from 'expo-router';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, ScrollView, Image } from 'react-native';

export default function CategoryScreen() {
  const { category } = useLocalSearchParams();
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');

  // Dummy data for bus listings
  const buses = [
    {
      id: 1,
      name: 'Greenline Travels',
      time: '22:00 - 07:00',
      duration: '9h 0m',
      price: '₹1200',
      seats: '24 seats left',
      rating: '4.5',
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 2,
      name: 'Orange Travels',
      time: '21:30 - 06:30',
      duration: '9h 0m',
      price: '₹1500',
      seats: '15 seats left',
      rating: '4.2',
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 3,
      name: 'KSRTC',
      time: '20:00 - 05:00',
      duration: '9h 0m',
      price: '₹900',
      seats: '30 seats left',
      rating: '4.0',
      image: 'https://via.placeholder.com/150'
    }
  ];

  if (category !== 'bus') {
    return (
      <ThemedView style={styles.container}>
        <ThemedText type="title">Category: {category}</ThemedText>
        {/* Add your category specific content here */}
      </ThemedView>
    )
  }

  return (
    <ScrollView style={styles.container}>
      <ThemedView style={styles.searchForm}>
        <ThemedText type="title" style={styles.title}>Book Bus Tickets</ThemedText>
        <TextInput
          style={styles.input}
          placeholder="From"
          value={from}
          onChangeText={setFrom}
        />
        <TextInput
          style={styles.input}
          placeholder="To"
          value={to}
          onChangeText={setTo}
        />
        <TextInput
          style={styles.input}
          placeholder="Date (DD-MM-YYYY)"
          value={date}
          onChangeText={setDate}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Search Buses</Text>
        </TouchableOpacity>
      </ThemedView>

      <View style={styles.busList}>
        {buses.map(bus => (
          <View key={bus.id} style={styles.busCard}>
            <Image source={{uri: bus.image}} style={styles.busImage}/>
            <View style={styles.busDetails}>
                <ThemedText type="defaultSemiBold">{bus.name}</ThemedText>
                <Text style={styles.busInfo}>{bus.time} ({bus.duration})</Text>
                <Text style={styles.busInfo}>{bus.seats}</Text>
                <Text style={styles.busInfo}>Rating: {bus.rating}</Text>
            </View>
            <View style={styles.busPrice}>
                <ThemedText type="subtitle">{bus.price}</ThemedText>
                <TouchableOpacity style={styles.bookButton}>
                    <Text style={styles.bookButtonText}>Book</Text>
                </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
  },
  searchForm: {
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 10,
  },
  title: {
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#E24A4A',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  busList: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  busCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  busImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 15,
  },
  busDetails: {
    flex: 1,
  },
  busInfo: {
      color: 'gray',
  },
  busPrice: {
    alignItems: 'flex-end',
  },
  bookButton: {
    backgroundColor: '#4A90E2',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginTop: 10,
  },
  bookButtonText: {
    color: 'white',
  }
});
