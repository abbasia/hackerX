import React, {useState} from 'react';
import {ActivityIndicator, View} from 'react-native';
import WebView from 'react-native-webview';

function ArticleScreen(props) {
  const {url} = props.route.params.article;
  const [loading, setLoading] = useState(true);
  console.log(url);
  return (
    <View style={{flex: 1}}>
      <WebView source={{uri: url}} onLoad={() => setLoading(false)}></WebView>
      {loading && <ActivityIndicator size="large" />}
    </View>
  );
}

export default ArticleScreen;
