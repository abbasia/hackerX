import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';

import {getTopStories} from '../hackerApi';

import FeedItem from './FeedItem';

function FeedScreen(props) {
  const [storyIds, setStoryIds] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      const storyIds = await getTopStories();
      setStoryIds(storyIds);
    };
    fetch();
  }, []);

  const handleItemPress = article => {
    props.navigation.navigate('Article', {article});
  };

  const handleCommentPress = article => {
    props.navigation.navigate('Comment', {commentIds: article.kids});
  };

  return (
    <View style={{backgroundColor: 'white'}}>
      <FlatList
        contentContainerStyle={{paddingHorizontal: 20}}
        data={storyIds}
        keyExtractor={(storyId, index) => storyId}
        renderItem={({item}) => (
          <FeedItem
            storyId={item}
            onPress={handleItemPress}
            onCommentPress={handleCommentPress}></FeedItem>
        )}
        initialNumToRender={10}
        maxToRenderPerBatch={10}
      />
    </View>
  );
}

export default FeedScreen;
