import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Modal } from 'react-native';

export default class App extends Component {
    render() {
        return (

            <View style={styles.modalView}>
                <Text style={styles.modalText}>Seja Bem-Vindo!</Text>
                <Button title='Sair' onPress={this.props.fechar} />
            </View>

        );
    }
}
/** Configuração de estilo para o codigo mais elegante */
const styles = StyleSheet.create({
    modalView: {
        backgroundColor: '#292929',
        width: '100%',
        height: 300,
        borderRadius: 15,
    },
    modalText: {
        color: '#FFF',
        fontSize: 28,
        textAlign: 'center',
    }
});
/*
 Pagina não necessita das funções a baixo.
  constructor(props) {
    super(props);
    this.state = {
      modalVisble: false
    };
    this.entrar = this.entrar.bind(this);
  }
  entrar() {
    this.setState({ modalVisble: true });
  }
  sair(visible){
    this.setState({modalVisble: visible})
  }
  const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

*/