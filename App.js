import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Modal } from 'react-native';
import Entrar from './src/Entrar'

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modalVisble: false
    };
    this.entrar = this.entrar.bind(this);
    this.sair = this.sair.bind(this);
  }

  entrar() {
    this.setState({ modalVisble: true });
  }
  sair(visible) {
    this.setState({ modalVisble: visible })
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title='Entrar' onPress={this.entrar} />

        <Modal animationType='slide' visible={this.state.modalVisble}>
          <View style={{ margin: 15, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Entrar fechar={() => this.sair(false)} />
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

/**  Passado atraves da props Entrar.JS
 * <View style={{ backgroundColor: '#292929', flex: 1 }}>
            <Text style={{ color: '#FFF', fontSize: 28 }}>Seja Bem-Vindo!</Text>
            <Button title='Sair' onPress={() => this.sair(false)} />
          </View>
 */