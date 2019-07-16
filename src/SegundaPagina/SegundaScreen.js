import React from 'react';
import { View, Text } from 'react-native';

class SegundaScreen extends React.Component {
    static navigationOptions = {
      title: 'Home',
      headerStyle: {
        backgroundColor: '#c71585',
      },
      headerTintColor: '#f8f8ff',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 28,
      },
    };

    state = {
      valores: [],
      Loading: true,
    }
  
    componentDidMount = async () => {
      // fetch('http://tarcisio-dev.com.br:7001/cursos/{idCurso}').then((resposta) => { }).catch((error) => { })
      const resposta = await fetch(`http://tarcisio-dev.com.br:7001/cursos/${idCurso}`);
      const respostaParsedada = await resposta.json();
      this.setState({ valores: respostaParsedada, Loading: false })

      // const resposta = await fetch(`http://tarcisio-dev.com.br:7001/cursos/${idCurso}/${idNome}`);
      // debugger;
      // const respostaParsedada = await resposta.json({nomeCurso});
      // this.setState({ valores: respostaParsedada, Loading: false})


       }
  
    render() {

      const { navigation } = this.props;
      const itemId = navigation.getParam('idItem');
      // const itemNM = navigation.getParam('itemNm');
 


      return (
        <View style={{ flex: 1 }}>
              <Text>{ itemId }</Text>
              {/* <Text>{itemNM}</Text> */}
        </View>
        
      );
    }
  }

  export default SegundaScreen;

