import {
    StyleSheet
} from 'react-native'

const styles = StyleSheet.create({

    container:{
        flex: 1,
        alignItems: 'center',
        backgroundColor: "#E98000",
        justifyContent: 'space-between'
    },
    
    header:{
        backgroundColor: "#ee982f",
        width: "100%",
        height: 150,
        alignItems: "center",
        justifyContent: 'space-between',
        marginBottom: 55,
        // borderBottomStartRadius: 10,
        // borderBottomEndRadius:10
    },

    card:{
        position: 'relative',
        backgroundColor: "#FFF",
        width: "90%",
        height: 55,
        borderRadius: 25,
        top: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },

    options:{
        flex: 1,
        width: "90%",
        backgroundColor: "#fff",
        borderTopEndRadius: 20,
        borderTopStartRadius: 20,
    }

})

export default styles;