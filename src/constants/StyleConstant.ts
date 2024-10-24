import { StyleSheet } from "react-native";

export const styleConstant = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        rowGap: 15
    },
    defaultHeight: {
        height: "100%"
    },
    gridMenu: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        gap: 20,
        alignItems: 'flex-start'
    }
})