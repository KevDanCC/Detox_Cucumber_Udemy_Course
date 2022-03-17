import React from 'react';
import { SafeAreaView, ScrollView, Text } from 'react-native';
import ImageComponents from '../components/ImageComponents';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const ImagesScreen = () => {
  return (
    <SafeAreaView style={{marginBottom: 50}}>
      <ScrollView showsVerticalScrollIndicator={false} testID='citiesBackground'>
        <ImageComponents title="Europe" nameTest='europe'/>
        <ImageComponents title="USA / Canada" nameTest='usacanada'/>
        <ImageComponents title="Asia" nameTest='asia'/>
      </ScrollView>
    </SafeAreaView>
  );
};

ImagesScreen.navigationOptions = {
  headerTitle: ()=><Text testID='citiesHeader'>Cities</Text>,
  headerShown: true,
  headerTitleAlign: 'center',
  title: 'Cities',
  tabBarIcon: <FontAwesome5 name="city" size={20} testID='citiesNavigationImagen'/>,
  tabBarAccessibilityLabel: 'Cities',
  tabBarTestID:'citiesNavigationSection'
};

export default ImagesScreen;
