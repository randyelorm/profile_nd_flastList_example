import React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import ForwardIcon from 'react-native-vector-icons/Ionicons'

const Signup = ({ navigation }) => {

    const goToFlatListFun = () => {
        navigation.navigate("FlatList Example")
    }


    return (
        <SafeAreaView style={styles.container}>


            <View>


                <View style={styles.content}>
                    <View>
                        <Text style={styles.LoginText}>Log in</Text>
                    </View>
                    <View style={styles.usernameView}>

                        <TextInput
                            style={styles.textInput}
                            placeholder="Username"

                        />
                    </View>

                    <View>

                        <TextInput
                            style={styles.textInput}
                            secureTextEntry={true}
                            placeholder="Password"
                        />
                        <Text style={styles.forgot}>Forgot Password?</Text>
                    </View>

                    <TouchableOpacity style={styles.LoginBtn}>
                        <Text style={styles.LoginBtnText}>Login</Text>
                    </TouchableOpacity>

                    <View style={styles.dont_have}>
                        <Text>Dont have an account?</Text>
                        <Text style={styles.signup}>SignUp</Text>
                    </View>
                </View>

            </View>


            <View style={styles.ButtonNdArrow}>
                <TouchableOpacity onPress={goToFlatListFun} style={styles.touchableBtn}>
                    <Text style={styles.btn_text}>Go to Flat List Example</Text>
                    <ForwardIcon name="arrow-forward-outline" style={styles.forwardButton} />
                </TouchableOpacity>

            </View>

        </SafeAreaView>
    );
}

export default Signup;


const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1,
        marginHorizontal: 20,
        marginVertical: 20


    },


    forwardButton: {
        fontSize: 20,
        color: "white"
    },

    touchableBtn: {
        backgroundColor: "#5B30AF",
        padding: 4,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 30,
        borderRadius: 100,
        marginTop: 30

    },

    btn_text: {
        fontSize: 17,
        color: "white",
        fontWeight: "bold"

    },

    textInput: {
        borderBottomWidth: 3,
        borderColor: "#5B30AF",
        marginBottom: 25,
        marginTop: 20
    },

    LoginText: {
        fontSize: 30,
        marginVertical: 30,
        color: "#5B30AF",
        fontWeight: "bold"
    },

    content: {
        paddingHorizontal: 30
    },

    LoginBtn: {
        marginVertical: 40,
        alignSelf: "center",
        backgroundColor: "#5B30AF",
        paddingHorizontal: 80,
        paddingVertical: 10,
        borderRadius: 10

    },

    forgot: {
        alignSelf: "flex-end",
        color: "lightblue",
        fontWeight: "bold"
    },

    dont_have: {
        flexDirection: "row",
        justifyContent: "center"
    },

    username: {
        color: "grey"
    },

    password: {
        color: "grey"
    },

    signup: {
        marginLeft: 10,
        color: "#5B30AF",
        fontWeight: "bold"

    },

    LoginBtnText: {
        fontSize: 20,
        color: 'white',

    }

});