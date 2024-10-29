import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CustomNavigationBar = () => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        height: 60,
        backgroundColor: '#f4511e',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <TouchableOpacity
        onPress={() => navigation.toggleDrawer()}
        style={{
          position: 'absolute',
          left: 10,
          top: 10,
        }}
      >
        <Text>Menú</Text>
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 20,
          color: '#fff',
          fontWeight: 'bold',
        }}
      >
        {navigation.state.routeName}
      </Text>
    </View>
  );
};

export default CustomNavigationBar;