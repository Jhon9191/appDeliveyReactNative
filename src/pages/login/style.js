import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#f2f3fa",
    },

    input:{
        width: 300,
        backgroundColor: "#d5d5d5",
        borderRadius: 7,
        padding: 10,
        marginBottom: 10,
        textAlign: "center"
    },

    button:{
        width: 300,
        backgroundColor: "#323131",
        borderRadius: 7,
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },

    content:{
        flex: 1,
        width: '100%',
    },

    whiteText:{
        color: "#fff",
        fontWeight: 'bold'
    }

});

export default styles;