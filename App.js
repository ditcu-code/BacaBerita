import React, {Component} from 'react';
import AppContainer from './src/screens/Tabscreen';
import { Root } from 'native-base';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }
async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Lobster:require('./assets/fonts/Lobster-Regular.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
    });
    this.setState({ loading: false });
  }
  render() {
    if (this.state.loading) {
      return (
        <Root>
          <AppLoading />
        </Root>
      );
    } else {
      return (
        <Root>
          <AppContainer />
        </Root>
      );
    }
  }
}


