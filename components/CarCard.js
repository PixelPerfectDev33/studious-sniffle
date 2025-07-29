import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';

export default function CarCard({ car, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Card style={{ marginRight: 12, width: 220, borderRadius: 10, overflow: 'hidden' }}>
        <View>
          <Image
            source={car.image}
            style={{
              width: '100%',
              height: 180,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}
            resizeMode="cover"
          />
          <TouchableOpacity style={{ position: 'absolute', top: 10, right: 10 }}>
            <AntDesign name="hearto" size={22} color="white" />
          </TouchableOpacity>
        </View>
        <Card.Content style={{ paddingBottom: 12 }}>
          <Title numberOfLines={1} style={{ fontSize: 16 }}>{car.title}</Title>
          <Paragraph style={{ marginBottom: 2, fontSize: 14 }}>{car.price}</Paragraph>
          <Paragraph style={{ fontSize: 14 }}>⭐ {car.rating}</Paragraph>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
}
