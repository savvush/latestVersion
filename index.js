/**
 * @format
 */


/*
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
*/

//// Linking has also been added from react-native package
import { AppRegistry, Linking } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import {  AuthModeStrategyType } from 'aws-amplify'

import awsconfig from './src/aws-exports'
import { Amplify } from "aws-amplify";

// add InAppBrowser for social auth thingies
import InAppBrowser from 'react-native-inappbrowser-reborn';


  
 
Amplify.configure({
    ...awsconfig,
    DataStore: {
      authModeStrategyType: AuthModeStrategyType.MULTI_AUTH
    },
    /// the folowing sections are added
    oauth: {
      ...awsconfig.oauth,
      urlOpener,
    }
  });

  
  // add the followings...
  async function urlOpener(url, redirectUrl) {
    await InAppBrowser.isAvailable();
    const { type, url: newUrl } = await InAppBrowser.openAuth(url, redirectUrl, {
        showTitle: true,
        enableUrlBarHiding: false,
        enableDefaultShare: true,
        ephemeralWebSession: true,
    });

    if (type === 'success') {
        console.log("Type is success, index js")
        Linking.openURL(newUrl);
    }
}



AppRegistry.registerComponent(appName, () => App);