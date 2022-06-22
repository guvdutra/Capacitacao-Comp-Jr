import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import * as Animatable from "react-native-animatable";

export default function SignIn() {
    const navigation = useNavigation();

    const [input, setInput] = useState('');
    const [hidePass, setHidePass] = useState(true);

    const [email, setEmail] = useState('');
    const [emailValidError, setEmailValidError] = useState('');

    const handleValidEmail = val => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        
        if (val.length === 0) {
            setEmailValidError('Insira o endereço de email');
        } else if (reg.test(val) === false) {
            setEmailValidError('Insira um endereço de email válido');
        } else if (reg.test(val) === true) {
            setEmailValidError('');
        }
    };

    return (
        <View style={styles.container}>
            <StatusBar />

            <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                <Text style={styles.message}>Bem-vindo(a)</Text>
            </Animatable.View>

            <Animatable.View style={styles.containerForm}>
                <Text style={styles.title}>Email</Text>
                <TextInput 
                    placeholder="Digite um email..."
                    style={styles.inputEmail}
                    value={email}
                    autoCorrect={false}
                    autoCapitalize="none"
                    onChangeText={value => {
                        setEmail(value);
                        handleValidEmail(value);
                    }}
                />
                {emailValidError ? <Text>{emailValidError}</Text> : null}

                <Text style={styles.title}>Senha</Text>

                <View style={styles.inputArea}>
                    
                    <TextInput 
                        style={styles.inputSenha}
                        placeholder="Insira sua senha"
                        value={input}
                        onChangeText={ (texto) => setInput(texto) }
                        secureTextEntry={hidePass}
                    />
                    <TouchableOpacity 
                    style={styles.icon} 
                    onPress={ () => setHidePass(!hidePass) }
                    >
                        { hidePass ?
                            <Ionicons name="eye" color="#000" size={25} />
                            :
                            <Ionicons name="eye-off" color="#000" size={25} />

                        }
                    </TouchableOpacity>
                </View>

                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => navigation.navigate('Home')}
                >
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonRegister}>
                    <Text style={styles.registerText}>Não Possui conta? Clique aqui</Text>
                </TouchableOpacity>

            </Animatable.View>
        </View>
    );
};

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    containerHeader: {
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%',
    },
    message: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FFF',
    },
    containerForm: {
        backgroundColor: '#fff',
        flex: 1,
        borderTopStartRadius: 25,
        borderTopEndRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',
    },
    title: {
        fontSize: 20,
        marginTop: 28,
    },
    inputEmail: {
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16,
    },
    button: {
        backgroundColor: '#000',
        width: '100%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFF'
    },
    buttonRegister: {
        color: '#000',
        marginTop: 14,
        alignSelf: 'center',
    },
    registerText: {
        color: '#a1a1a1',
    },
    inputArea: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        height: 40,
        alignContent: 'space-between',
    },
    inputSenha: {
        width: '85%',
        height: 50,
        fontSize: 17,
        alignSelf: 'center',
    },
    icon: {
        width: '15%',
        justifyContent: 'center',
        alignItems: 'center',
    },
});