import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({

    centerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',        
    },
    title: {
        fontSize: 80,
        fontWeight: '300',
        color: 'black'
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 10,
        bottom: 25,
    },    
})