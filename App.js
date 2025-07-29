import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; // Changed from createNativeStackNavigator

// --- Data for cars ---
const carsMarrakech = [
  {
    id: 'm1',
    title: 'Hyundai i10 – Hay Charaf',
    price: 'MAD150/day',
    image: require('./assets/1.jpg'), // Make sure this asset exists in your Snack
    rating: 4.8,
    description: 'A compact and fuel-efficient car, perfect for city driving in Marrakech. Easy to park and navigate through busy streets, offering a comfortable ride for daily commutes or tourist explorations.'
  },
  {
    id: 'm2',
    title: 'Fiat 500 Sport',
    price: '250 MAD / jour',
    image: require('./assets/2.jpg'), // Make sure this asset exists in your Snack
    rating: 4.9,
    description: 'Petite citadine idéale pour la ville. Enjoy the stylish and sporty ride of the Fiat 500, designed for an enjoyable urban experience with its nimble handling and distinctive design.'
  },
  {
    id: 'm3',
    title: 'Dacia Logan – Targa',
    price: 'MAD200/day',
    image: require('./assets/2.jpg'), // Make sure this asset exists in your Snack
    rating: 4.7,
    description: 'Spacious and reliable, the Dacia Logan is a great choice for families or longer trips. It offers ample trunk space and a comfortable interior, making it ideal for road trips across the region.'
  },
];

const carsTanger = [
  {
    id: 't1',
    title: 'Kia Picanto – Marina',
    price: 'MAD170/day',
    image: require('./assets/3.jpg'), // Make sure this asset exists in your Snack
    rating: 4.9,
    description: 'Ideal for navigating the charming streets of Tangier. Its compact size makes it easy to park in crowded areas, while its fuel efficiency is perfect for exploring the city and its vibrant surroundings.'
  },
  {
    id: 't2',
    title: 'Dacia Logan – Targa',
    price: 'MAD200/day',
    image: require('./assets/2.jpg'), // Make sure this asset exists in your Snack
    rating: 4.7,
    description: 'A robust and dependable car for exploring Tangier and its surrounding areas. This model offers practicality and comfort, suitable for both city driving and longer excursions along the coast.'
  },
];

// --- CarCard Component ---
const CarCard = ({ car, navigation }) => {
  const handlePress = () => {
    navigation.navigate('CarDetail', { car: car });
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.card}>
      <Image source={car.image} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.title}>{car.title}</Text>
        <Text style={styles.price}>{car.price}</Text>
        {car.rating && <Text style={styles.rating}>⭐ {car.rating}</Text>}
      </View>
    </TouchableOpacity>
  );
};

// --- CarDetailScreen Component ---
const CarDetailScreen = ({ route }) => {
  const { car } = route.params;

  return (
    <SafeAreaView style={styles.detailScreenContainer}>
      <ScrollView contentContainerStyle={styles.detailScrollContent}>
        <Image source={car.image} style={styles.detailImage} resizeMode="cover" />
        <View style={styles.detailContent}>
          <Text style={styles.detailTitle}>{car.title}</Text>
          <Text style={styles.detailPrice}>{car.price}</Text>
          {car.rating && <Text style={styles.detailRating}>⭐ {car.rating} rating</Text>}
          {car.description && (
            <>
              <Text style={styles.descriptionHeader}>Description:</Text>
              <Text style={styles.detailDescription}>{car.description}</Text>
            </>
          )}
          <Text style={styles.placeholderText}>
            This is where more detailed information about the car would go,
            such as specific features, availability calendar, booking options, etc.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// --- Main App Component ---
const Stack = createStackNavigator(); // Changed from createNativeStackNavigator

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.homeScreenContainer}>
      <ScrollView style={styles.mainScrollView}>
        <Text style={styles.sectionTitle}>🚗 Voitures populaires - Marrakech</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalCarList}>
          {carsMarrakech.map((car) => (
            <CarCard key={car.id} car={car} navigation={navigation} />
          ))}
        </ScrollView>

        <Text style={styles.sectionTitle}>🚘 Disponibles ce week-end - Tanger</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalCarList}>
          {carsTanger.map((car) => (
            <CarCard key={car.id} car={car} navigation={navigation} />
          ))}
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CarDetail"
          component={CarDetailScreen}
          options={{ title: 'Détails de la voiture' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  // --- HomeScreen Styles ---
  homeScreenContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 0,
  },
  mainScrollView: {
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
    marginTop: 20,
  },
  horizontalCarList: {
    paddingBottom: 15,
  },

  // --- CarCard Styles ---
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginRight: 15,
    width: 220,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 140,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  details: {
    padding: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 5,
    color: '#333',
  },
  price: {
    fontSize: 16,
    color: '#007AFF',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  rating: {
    fontSize: 14,
    color: '#FFD700',
    fontWeight: '500',
  },

  // --- CarDetailScreen Styles ---
  detailScreenContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  detailScrollContent: {
    paddingBottom: 20,
  },
  detailImage: {
    width: '100%',
    height: 280,
  },
  detailContent: {
    padding: 20,
    backgroundColor: '#fff',
    marginHorizontal: 10,
    borderRadius: 12,
    marginTop: -30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  detailTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#222',
  },
  detailPrice: {
    fontSize: 24,
    color: '#007AFF',
    fontWeight: 'bold',
    marginBottom: 15,
  },
  detailRating: {
    fontSize: 18,
    color: '#666',
    marginBottom: 20,
  },
  descriptionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
    color: '#333',
  },
  detailDescription: {
    fontSize: 16,
    lineHeight: 24,
    color: '#555',
    marginBottom: 20,
  },
  placeholderText: {
    fontSize: 14,
    fontStyle: 'italic',
    color: '#888',
    marginTop: 15,
    textAlign: 'center',
  },
});
