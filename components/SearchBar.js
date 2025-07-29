import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <View style={{ paddingHorizontal: 16, paddingBottom: 10 }}>
      <View style={{
        backgroundColor: '#eee',
        borderRadius: 8,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
      }}>
        <AntDesign name="search1" size={20} color="gray" />
        <TextInput
          style={{
            flex: 1,
            marginLeft: 10,
            paddingVertical: 8,
            color: 'black'
          }}
          placeholder="Commencer ma recherche"
          placeholderTextColor="gray"
          value={searchQuery}
          onChangeText={text => setSearchQuery(text)}
        />
      </View>
    </View>
  );
}
