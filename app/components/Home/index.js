import React, { Component } from 'react'
import { View, Image, Text, TextInput, Button, Alert } from 'react-native'
import styles from './styles'

class Home extends Component {

    state = { username: "", password: "" }

    static navigationOptions = {
        header: null
    }

    checkLogin() {
        const { username, password }= this.state
        
      /*   if(username == 'admin' && password == 'admin'){
            this.props.navigation.navigate('Dashboard')
        } else {
            Alert.alert('Error', 'Password or username mismatch')
        } 





//componentDidMount = () => {
        fetch('http://localhost:8090/api/auth/signin', {
            method: 'POST', 
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username,
                password 
            })
        })
        .then(res => {
              return res.text()
        })
        .then(res => {
            if(res === '1'){
                this.props.navigation.navigate('Dashboard')
                console.warn(res)
            } else {
                console.warn(res)
                Alert.alert('Error', 'Password or username mismatch', [{
                    text: 'Okay'
                }])
            }
        })  */
        
        this.props.navigation.navigate('Dashboard')
        
    }

    render() {
        const { heading, input,parent, loginContainer,logo } =styles
        return (
        <View style={parent}>
             <View style={loginContainer}>
                    <Image resizeMode="contain" style={logo} source={require('../../components/images/single_user.png')} />
         </View> 
            
            <Text style={heading}>User Login</Text>
            <TextInput style={input} placeholder='Enter Username' onChangeText={text => this.setState({ username:text})} />
            <TextInput style={input} placeholder='Enter Password' secureTextEntry={true} onChangeText={text => this.setState({ password:text})} />

            <Button color='#454543' title={"login"} onPress={_ =>this.checkLogin()} />
            <Text> </Text>
            <Button color='#454543' title={"register"} onPress={_ =>this.props.navigation.navigate('UserReg')} />
            
        </View>
        )
    }
}

export default Home
