import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function BottomNav() {
  return (
    <View style={{
      flexDirection: 'row',
      justifyContent: 'space-around',
      paddingVertical: 10,
      borderTopWidth: 1,
      borderColor: '#ddd',
      backgroundColor: '#fff'
    }}>
      <TabIcon icon="explore" label="Explorer" />
      <TabIcon icon="favorite-border" label="Favoris" />
      <TabIcon icon="person-outline" label="Compte" />
    </View>
  );
}

function TabIcon({ icon, label }) {
  return (
    <TouchableOpacity style={{ alignItems: 'center' }}>
      <MaterialIcons name={icon} size={24} color="black" />
      <Text style={{ fontSize: 12 }}>{label}</Text>
    </TouchableOpacity>
  );
}
