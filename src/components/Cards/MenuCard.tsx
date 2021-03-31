import React from 'react'
import { Image, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

function MenuCard() {
    return (
        <View>
            <TouchableOpacity onPress={() => {}}> 
                <View>
                    <Image source={require("/assets/")}></Image>
                    <Text></Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default MenuCard
