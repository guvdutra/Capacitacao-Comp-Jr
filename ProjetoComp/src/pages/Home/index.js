import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { 
  Text,
  StyleSheet,
  Image,
  SafeAreaView, 
  ScrollView,
  Animated, 
  TouchableOpacity 
} from 'react-native';
import Card from '../../shared/card';

import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();

  const [scrollY, setScrollY] = useState(new Animated.Value(0));

  return (
    <SafeAreaView >
         <StatusBar style='auto'/>

      <Animated.View 
        style={[
          styles.header,
          {
            height: scrollY.interpolate({
              inputRange: [10, 160, 185],
              outputRange: [100, 50, 10],
              extrapolate: 'clamp',
            }),
            opacity: scrollY.interpolate({
              inputRange: [1, 75, 170],
              outputRange: [1, 1, 0],
              extrapolate: 'clamp'
            })
          }
        ]}
      >
        <Animated.Image
          source={require('../../assets/My.png')}
          style={{
            width: scrollY.interpolate({
              inputRange:[0, 120],
              outputRange:[100, 50],
              extrapolate: 'clamp'
            }),
            height: 90
          }}
          resizeMode="contain"
        />

        <Text
          style={{color: '#FFF', fontSize: 18, paddingRight: 40}}
        >BEAUTYSTORE</Text>

        <TouchableOpacity
          onPress={ () => navigation.navigate('SignIn')}
          >
            <Image
              source={require('../../assets/usuarioWhite.png')}
              style={{width: 30, height: 30}}
              resizeMode='contain'
            />
        </TouchableOpacity>
        
      </Animated.View>  

      <ScrollView
        scrollEventThrottle={16}
        onScroll={Animated.event([{
          nativeEvent: {
            contentOffset: { y: scrollY }
          },
        }],
        { useNativeDriver: false })}
      >
        <Card>
          <Image
            source={require('../../assets/Cards/base.png')}
            style={{width: 250, height: 250}}
          />
          <Text
            style={{fontSize: 30}}
          >Base Mac</Text>
          <Text>R$239.00</Text>
        </Card>

        <Card>
          <Image
            source={require('../../assets/Cards/pincelMaquiagem.png')}
            style={{width: 150, height: 250}}
          />
          <Text
            style={{fontSize: 30}}
          >Máscara para cílios</Text>
          <Text>R$159.00</Text>
        </Card>

        <Card>
          <Image
            source={require('../../assets/Cards/deliniador.png')}
            style={{width: 150, height: 250}}
          />
          <Text
            style={{fontSize: 30}}
          >Deliniador</Text>
          <Text>R$27.00</Text>
        </Card>

        <Card>
          <Image
            source={require('../../assets/Cards/esponja.png')}
            style={{width: 130, height: 220, marginTop: 30}}
          />
          <Text
            style={{fontSize: 30, marginTop: 10}}
          >Esponja</Text>
          <Text>R$34.00</Text>
        </Card>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#000',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 10,
    paddingLeft: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#FFF',
  },
  box: {
    height: 300,
    //backgroundColor: '#DDD',
    margin: 7,
    borderRadius: 5,
  }
});
