 import React, { Component } from 'react'
import { View, Text, Button} from 'react-native'


class Dashboard extends Component {

    render() {
        return (
        <View>
            
            <Text>This is Dashboard</Text>
            
            <Button color='#454549' title={"register"} onPress={_ =>this.props.navigation.navigate('UserReg')} />
        </View>
        )
    }
}

 export default Dashboard 