import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#F7B428",
    },

    inputContainer: {
        borderRadius: 7,
        justifyContent: 'space-around', 
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
        backgroundColor: "#D64622",
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
        color: "#F7B428",
        fontWeight: 'bold'
    },

    newAccount:{
        fontSize: 16,
        fontWeight: 'bold',
        color: "#D64622"
    },

    title:{
        fontSize: 34,
        color: '#f3f4f2',
        textAlign: 'center',
        fontWeight: 'bold',
        margin: 15,
        marginBottom: 50,
    }

});

export default styles;