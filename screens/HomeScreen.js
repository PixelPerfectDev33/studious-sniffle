import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import CarCard from '../components/CarCard';
import SearchBar from '../components/SearchBar';
import { carsMarrakech } from '../data/cars';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, paddingTop: 40, backgroundColor: '#fff' }}>
      <SearchBar />

      <ScrollView style={{ paddingHorizontal: 12 }} contentContainerStyle={{ paddingBottom: 80 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>
          🚗 Voitures populaires - Marrakech
        </Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {carsMarrakech.map((car, idx) => (
            <CarCard key={idx} car={car} onPress={() => navigation.navigate('CarDetails', { car })} />
          ))}
        </ScrollView>
      </ScrollView>
    </View>
  );
}