import React from 'react';
import { Text, 
         View, 
         TouchableOpacity, 
         ActivityIndicator
         } from 'react-native';


class HomeScreen extends React.Component {
    static navigationOptions = {
      title: 'Cursos',
      headerStyle: {
        backgroundColor: '#c71585',
        textAlign: 'center',                
      },
      headerTintColor: '#f8f8ff',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 28,
        textAlign: "center",
        flex: 1,
      },
    };
  
    state = {
      valores: [],
      isLoading: true
    }
  
    componentDidMount = async () => {
      // fetch('http://tarcisio-dev.com.br:7001/cursos').then((resposta) => { }).catch((error) => { })
      const resposta = await fetch('http://tarcisio-dev.com.br:7001/cursos');
      const respostaParsedada = await resposta.json();
      this.setState({ valores: respostaParsedada, isLoading: false })
    }
  
    render() {
  
      if (this.state.isLoading) {
        return (
          <View>
            <ActivityIndicator size="large" color="#ccc" />
          </View>
        )
      }
  
      return (
        <View style={{ flex: 1 }}>
           {this.state.valores.map((valor, index) => {
            return (
              <View  style={{flexDirection: 'column', borderRadius: 15, backgroundColor: '#b0e0e6', padding: 10}}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('SegundaScreen', {idItem: valor.id })}
                style={{ backgroundColor: '#f8f8ff', height: 75, flexDirection: 'row' }}>
                {/* https://reactnavigation.org/docs/en/params.html */}
                <Text key={index} style={{fontSize: 18, fontWeight: 'bold', alignSelf: 'center'}}> {valor.id} </Text>
                <Text key={index} style={{fontSize: 18, fontWeight: 'bold', alignSelf: 'center' }}> {valor.nome} </Text>
              </TouchableOpacity>
              </View>
            )
          })
          }
          </View>
      );
    }
  }

export default HomeScreen;