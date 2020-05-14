import React from 'react';
import {
  View,
  StatusBar,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Splash = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#191d21" />
      <View style={styles.header}>
        <Animatable.Image
          animation="bounceIn"
          duration={1500}
          source={require('../../assets/images/barber-test.png')}
          resizeMode={'stretch'}
          style={styles.logo}
        />
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <Text style={styles.title}>Esteja conectado sempre!</Text>
        <Text style={styles.text}>Entre com sua conta</Text>
        <View style={styles.button}>
          <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
            <LinearGradient
              colors={['#191d21', '#191d15']}
              style={styles.signIn}>
              <Text style={styles.signTxt}>Vamos lá!</Text>
              <MaterialIcons name="navigate-next" color="#d7d1cb" size={20} />
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

const {height} = Dimensions.get('screen');
const heightLogo = height * 0.7 * 0.4;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191d21',
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    backgroundColor: '#d7d1cb',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 50,
    paddingVertical: 50,
  },
  logo: {
    height: heightLogo,
    width: heightLogo,
  },
  title: {
    fontFamily: 'Anton',
    fontSize: 30,
    color: '#191d21',
    alignSelf: 'center',
  },
  text: {
    color: '#444',
    marginTop: 20,
  },
  button: {
    alignItems: 'flex-end',
    marginTop: 30,
  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    flexDirection: 'row',
  },
  signTxt: {
    fontFamily: 'Anton',
    fontSize: 16,
    color: '#d7d1cb',
    padding: 2,
  },
});

export default Splash;
