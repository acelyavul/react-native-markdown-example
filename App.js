/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, ScrollView, View, Text, Linking} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Markdown from 'react-native-markdown-package';

const text = `
 # This is Heading 1
 ## This is Heading 2
 1. List1
 2. List2
   This is a \`description\`  for List2 .\n
   * test
   * test
 3. List3
 4. List4\n
 * Unique list char1 ß
 * Unique list char2 ß
 * Unique list char3 ß
 - Not bold &
 - **Manually set to bold &**
 - Suddenly bold & \n

 You can also put some url as a link [like This](https://www.google.com) or write it as a plain text:
   https://www.google.com
   <mailme@gmail.com>

   \n

 ---
  
 This text should be printed between horizontal rules
  
 ---

 The following code is an example for codeblock:
  
     const a = function() {
       runSomeFunction()
     };
 
     \n
 Below is some example to print blockquote
 > Test block Quote
 > Another  block Quote

 \n

 this is _italic_ 
 this is **strong**
 Some *really* ~~basic~~ **Markdown**.

 \n

 | # | Name   | Age 
 |---|--------|-----|
 | 1 | John   | 19  |
 | 2 | Sally  | 18  |
 | 3 | Stream | 20  |
 
 \n
 this is an example for adding picture with prefix:
 ![rn_package](/uploads/0a3a66e439661bc47cd3ff6619047dcf/rn_package.png)
 `;

class App extends Component<{}> {
  render() {
    return (
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <View style={styles.container}>
          <Text style={styles.welcome}>Welcome to React Native!</Text>
          <Markdown
            styles={markdownStyle.collectiveMd}
            onLink={url => Linking.openURL(url)}
            imagePrefix="https://gitlab.com/avul/my_project">
            {text}
          </Markdown>
          <Markdown styles={markdownStyle.singleLineMd}>
            this is a test single line md
          </Markdown>
        </View>
      </ScrollView>
    );
  }
}

const markdownStyle = {
  singleLineMd: {
    text: {
      color: 'blue',
      textAlign: 'right',
    },
    view: {
      alignSelf: 'stretch',
    },
  },
  collectiveMd: {
    heading1: {
      color: 'red',
    },
    heading2: {
      color: 'green',
      textAlign: 'right',
    },
    strong: {
      color: 'blue',
    },
    em: {
      color: 'cyan',
    },
    text: {
      color: 'black',
    },
    blockQuoteText: {
      color: 'grey',
    },
    blockQuoteSection: {
      flexDirection: 'row',
    },
    blockQuoteSectionBar: {
      width: 3,
      height: null,
      backgroundColor: '#DDDDDD',
      marginRight: 15,
    },
    codeBlock: {
      fontWeight: '500',
      backgroundColor: '#DDDDDD',
    },
    tableHeader: {
      backgroundColor: 'grey',
    },
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    margin: 10,
    padding: 20,
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default App;
