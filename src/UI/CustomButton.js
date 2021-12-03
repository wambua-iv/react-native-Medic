import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

const CustomButton = ({children}) =>(
    <TouchableOpacity>
        <View>
            <Text>{children}</Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    wrapper: {

    },
    btn: {

    }
})

export default CustomButton;

export const BtnWithoutBackground = ({children}) =>(
    <TouchableOpacity>
        <View>
            <Text style ={btnStylles.text}>{children}</Text>
        </View>
    </TouchableOpacity>
)

const btnStylles = StyleSheet.create({
    text: {
        color: 'aqua'
    }
})