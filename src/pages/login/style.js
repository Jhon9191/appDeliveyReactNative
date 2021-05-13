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

    inputContainer: {
        borderRadius: 7,
        justifyContent: 'center', 
        alignItems: 'center',
        flexDirection: 'row', 
        backgroundColor: "#d5d5d5", 
        width: '90%',
        marginBottom:15
    },
    input:{
        width: "85%",
    },

    button:{
        width: "90%",
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