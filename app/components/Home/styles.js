import { StyleSheet} from 'react-native'


export default StyleSheet.create({
    heading: {
        fontSize: 35,
        textAlign: 'center',
        color: '#000000'
    },
    input: {
        fontSize: 25,
        marginLeft: 20,
        //marginRight: 20,
        marginBottom: 10,
        borderBottomColor: '#000000',
       borderBottomWidth: 1
    },
    
    parent: {
        flex: 1,
        justifyContent: 'center', 
        backgroundColor: '#FEFEFF'
    },
    loginContainer:{
        alignItems: 'center',
        marginBottom: 100,
        justifyContent: 'center'
    },
    logo: {
        position: 'absolute',
        width: 300,
        height: 50
    }
})