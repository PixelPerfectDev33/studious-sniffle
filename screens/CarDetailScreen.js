import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

export default function CarDetailScreen({ route }) {
  const { car } = route.params;

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
      <Image source={car.image} style={{ width: '100%', height: 250 }} resizeMode="cover" />
      <View style={{ padding: 16 }}>
        <Text style={{ fontSize: 22, fontWeight: 'bold' }}>{car.title}</Text>
        <Text style={{ fontSize: 16, marginVertical: 8 }}>{car.price}</Text>
        <Text style={{ fontSize: 16 }}>⭐ {car.rating}</Text>
        <Text style={{ marginTop: 20, fontSize: 14, lineHeight: 20 }}>
          {car.description || 'Description de la voiture non disponible.'}
        </Text>
      </View>
    </ScrollView>
  );
}
