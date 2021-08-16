import React from 'react'; 

import { Text, View, StyleSheet, Image, ImageBackground } from 'react-native'; 

import Constants from 'expo-constants'; 

 
 

//Displays output 

export default function App() { 

  const image = require('./assets/NasaMarsLogo.jpg'); 

  return ( 

    <View> 

      <ImageBackground style={{ width: 100, height: 100 }} source={image}></ImageBackground> 

        <Text 

          style={{ fontFamily: 'Cochin', fontSize: 25, fontWeight: 'Bold' }}> 

          Mars Simulation 

        </Text> 

        <Text style={{ fontFamily: 'Cochin', fontSize: 17 }}> 

          {'\n'} Mars has been explored by several uncrewed spacecraft. Mariner 

          4 was the first spacecraft to visit Mars; launched by NASA on 28 

          November 1964, it made its closest approach to the planet on 15 July 

          1965. Mariner 4 detected the weak Martian radiation belt, measured at 

          about 0.1% that of Earth, and captured the first images of another 

          planet from deep space. {'\n'} {'\n'} The Soviet Mars 3 mission 

          included a lander, which achieved a soft landing in December 1971; 

          however, contact was lost seconds after touchdown. On 20 July 1976, 

          Viking 1 performed the first successful landing on the Martian 

          surface. On 4 July 1997, the Mars Pathfinder spacecraft landed on Mars 

          and on 5 July released its rover, Sojourner, the first robotic rover 

          to operate on Mars. 

        </Text> 

       

    </View> 

  ); 

} 