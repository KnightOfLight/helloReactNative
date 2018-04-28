import React from 'react';
import { AppRegistry, TextInput, Button, View, Alert  } from 'react-native';

export default class App extends React.Component {
   constructor(props) {
    super(props);
    this.state = {
    	firstNumber: '',
    	secondNumber: ''
    };
  }

  render() {
    return (
    	<View style={{padding: 20}}>
        <TextInput
          style={{height: 40}}
          placeholder="Первое число"
          onChangeText={(firstNumber) => this.setState({firstNumber})}
        />
         <TextInput
          style={{height: 40}}
          placeholder="Второе число"
          onChangeText={(secondNumber) => this.setState({secondNumber})}
        />
      	<Button
  			onPress={() => {
  			 	if (this.state.firstNumber == '' || this.state.secondNumber == '') {
  			 		Alert.alert('Заполните пожалуйста все поля!');
  			 	} else {

  			 	}
    			
  			}}
  			title="Суммировать"
		/>
		</View>
    );
  }
}


