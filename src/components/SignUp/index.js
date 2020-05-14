import React, {useState} from 'react';
import {
  View,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

const SignUp = ({navigation}) => {
  const [inputEmail, setInputEmail] = useState();
  const [checkTextInputChange, setCheckTextInputChange] = useState(false);
  const [password, setPassword] = useState(false);
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [passwordConfirm, setPasswordConfirm] = useState(false);
  const [secureTextEntryConfirm, setSecureTextEntryConfirm] = useState(true);

  function textInputChange(text) {
    if (text.length !== 0) {
      setCheckTextInputChange(true);
      setInputEmail(text);
    } else {
      setCheckTextInputChange(false);
    }
  }
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#191d21" />
      <View style={styles.header}>
        <Text style={styles.textHeader}>Bem Vindo Diego!</Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <Text style={styles.textFooter}>E-MAIL</Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color="#555" size={20} />
          <TextInput
            placeholder="Seu email..."
            style={styles.textInput}
            onChangeText={text => textInputChange(text)}
          />
          {checkTextInputChange && (
            <Animatable.View animation="bounceIn">
              <Feather name="check-circle" color="green" size={20} />
            </Animatable.View>
          )}
        </View>
        <Text style={[styles.textFooter, {marginTop: 35}]}>Senha</Text>
        <View style={styles.action}>
          <Feather name="lock" color="#555" size={20} />
          <TextInput
            secureTextEntry={secureTextEntry}
            placeholder="Sua senha..."
            style={styles.textInput}
            onChangeText={text => setPassword(text)}
          />
          <TouchableOpacity
            onPress={() => setSecureTextEntry(!secureTextEntry)}>
            {secureTextEntry ? (
              <Feather name="eye-off" color="gray" size={20} />
            ) : (
              <Feather name="eye" color="gray" size={20} />
            )}
          </TouchableOpacity>
        </View>
        <Text style={[styles.textFooter, {marginTop: 35}]}>
          Confirmar Senha
        </Text>
        <View style={styles.action}>
          <Feather name="lock" color="#555" size={20} />
          <TextInput
            secureTextEntry={secureTextEntryConfirm}
            placeholder="Confirm Sua senha..."
            style={styles.textInput}
            onChangeText={text => setPasswordConfirm(text)}
          />
          <TouchableOpacity
            onPress={() => setSecureTextEntryConfirm(!secureTextEntryConfirm)}>
            {secureTextEntryConfirm ? (
              <Feather name="eye-off" color="gray" size={20} />
            ) : (
              <Feather name="eye" color="gray" size={20} />
            )}
          </TouchableOpacity>
        </View>
        <Text style={{color: '#222', marginTop: 15, fontWeight: 'bold'}}>
          Esqueceu a senha?
        </Text>
        <View style={styles.button}>
          <TouchableOpacity onPress={() => {}} style={{width: '100%'}}>
            <LinearGradient
              colors={['#191d21', '#191d15']}
              style={styles.signIn}>
              <Text style={styles.signTxt}>Entrar</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={{color: '#222', marginTop: 15, fontWeight: 'bold'}}>
              voltar
            </Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191d21',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
    //alignItems: 'center',
  },
  footer: {
    flex: 3,
    backgroundColor: '#d7d1cb',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 50,
    paddingVertical: 50,
  },
  textHeader: {
    fontFamily: 'Anton',
    fontSize: 30,
    color: '#d7d1cb',
  },
  textFooter: {
    fontFamily: 'Comfortaa',
    color: '#191d21',
    fontSize: 18,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#999',
    paddingBottom: 5,
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    paddingLeft: 10,
    color: '#555',
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  signTxt: {
    fontWeight: 'bold',
    color: '#d7d1cb',
    fontSize: 18,
  },
  signUp: {
    height: 50,
    width: '100%',
    borderWidth: 1,
    borderColor: '#191d21',
    borderRadius: 10,
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SignUp;
