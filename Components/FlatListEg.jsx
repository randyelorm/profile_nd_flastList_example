import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import PhoneIcon from 'react-native-vector-icons/FontAwesome5';
import HorizontalDots from 'react-native-vector-icons/Entypo';
import MessaeProcessing from 'react-native-vector-icons/MaterialCommunityIcons';


const FlatListEg = () => {



    const myItems = [
        {
            name: "Randy Davoh",
            number: "403-038-3932",
            mysource: require('../assets/me.jpg')
        },


        {
            name: "Ella Taylor",
            number: "292-238-3901",
            mysource: require('../assets/sene.jpeg')
        },

        {
            name: "Joshua Osei",
            number: "192-023-0129",
            mysource: require('../assets/mosh.jpeg')
        },

        {
            name: "Amanda Owusu",
            number: "203-932-2031",
            mysource: require('../assets/sinach.jpeg')
        },

        {
            name: "Stanley Sowah",
            number: "339-234-1011",
            mysource: require('../assets/ramos.jpeg')

        },

        {
            name: "Fred Tettey",
            number: "393-234-2343",
            mysource: require('../assets/aaron.jpeg')
        },

        {
            name: "Vivian Lord",
            number: "340-343-4343",
            mysource: require('../assets/buko.jpeg')

        },
    ]

    return (
        <View style={styles.container}>


            <FlatList
                data={myItems}

                renderItem={

                    ({ item }) => {
                        console.log(item.mysource);
                        return (
                            <View style={styles.flatListItems}>


                                <Image
                                    style={styles.ImagLogo}
                                    source={item.mysource}
                                />
                                <View style={styles.nameNdNumber}>
                                    <Text style={styles.name}>{item.name}</Text>
                                    <Text>{item.number}</Text>
                                </View>


                                <View style={styles.IconsView}>
                                    <PhoneIcon name="phone-alt" style={styles.phoneNdMessage} />
                                    <MessaeProcessing name="message-processing" style={styles.phoneNdMessage} />
                                    <HorizontalDots name="dots-three-vertical" style={styles.dotsIcon} />

                                </View>

                            </View>

                        )

                    }
                }

                keyExtractor={
                    (item, index) => {
                        return index
                    }
                }

            />

        </View>
    );
}

export default FlatListEg;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1,
        // alignItems: "center"
        paddingHorizontal: 10
    },

    flatListItems: {
        flexDirection: "row",
        marginVertical: 20,
        flex: 1,

    },

    nameNdNumber: {
        flexDirection: "column",
        marginHorizontal: 30,
        flex: 2
    },

    name: {
        fontSize: 20
    },

    IconsView: {
        fontSize: 30,
        flexDirection: "row",
        alignItems: "center",
        flex: 2
    },

    phoneNdMessage: {
        fontSize: 20,
        marginRight: 20,
        color: "#26B4E4"

    },

    dotsIcon: {
        fontSize: 20,
        color: "grey"

    },
    ImagLogo: {
        height: 50,
        width: 50,
        borderRadius: 100,
        overflow: "hidden"
    },
    ImageNameAndNumber: {
        flexDirection: "row"
    }

});