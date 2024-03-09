import React from 'react';
import {StyleSheet} from 'react-native';
import WebView from 'react-native-webview';

const Notes = ({route}) => {
  const {params} = route || {};
  const {body} = params?.note || {};

  const htmlContent = `<html lang="en">
    <head>
    </head>
    <body>
  
      ${body}
    
    </body>
    </html>`;
  return (
    <WebView
      style={{flex: 1}}
      originWhitelist={['*']}
      scalesPageToFit={false}
      source={{html: htmlContent}}
    />
  );
};

export default Notes;

const styles = StyleSheet.create({});
