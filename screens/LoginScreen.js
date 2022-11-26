import React from "react";
import { KeyboardAvoidingView, StyleSheet, TextInput, TouchableOpacity } from "react-native";

const LoginScreen = () => {
    return (
        <KeyboardAvoidingView
          style={styles.container}
          behavior="padding"
        >
            <view style={styles.inputContainer}>
              <TextInput
                placeholder="Correo electrónico"
                value={Text}
                onChangeText={onChangeText}
                    style={styles.input}
              />
               <TextInput
                placeholder="Contraseña"
                value={text}
                onChangeText={onChangeText}
                    style={styles.input}
                    secureTextEntry 
              />
            </view>

            <view style={styles.buttonContainer}>
              <TouchableOpacity
              onPress={() => { }}
              style={styles.button}
              >
                <Text style={styles.buttonText}>Iniciar Sesion</Text>
                </TouchableOpacity>  
                <TouchableOpacity
              onPress={() => { }}
              style={[styles.button, styles.buttonOutline]}
              >
                <Text style={styles.buttonOutlineText}>Registrarme</Text>
                </TouchableOpacity>   
            </view>
        </KeyboardAvoidingView>
    )
}  

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {

    },
inputContainer: {
  width: '80%'
},
input: {
  backgroundColor: 'white', 
  paddingHorizontal: 15,
  paddingVertical: 10,
  borderRadius: 10,
  marginTop: 5,
},
buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
},
button: {
    backgroundColor: '#0782F9',
    width: '100%',
    paddingHorizontal: 15,
    borderRadius: 10,
    alignItems: 'center', 
 },
buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: '#0782F9',
    borderWidth: 2,
 },
buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
},
buttonOutlineText: {
    color: '#0782F9',
    fontWeight: '700',
    fontSize: 16,
},
})
