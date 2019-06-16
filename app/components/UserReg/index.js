import React, { Component } from 'react'
import { View, Text, Button} from 'react-native'


class UserReg extends Component {
    
    render() {
        return (
        <View>
            
            <Text>This is User Register</Text>
            <Text>Please enter details</Text>
            
            <Button color='#454543' title={"home"} onPress={_ =>this.props.navigation.navigate('Home')} />
            
        </View>
        )
    }
}

 export default UserReg