import React from 'react';
import {View, FlatList} from 'react-native';
import CommentItem from './CommentItem';

function CommentScreen(props) {
  const {commentIds} = props.route.params;
  return (
    <View style={{backgroundColor: 'white'}}>
      <FlatList
        contentContainerStyle={{paddingHorizontal: 20}}
        data={commentIds}
        keyExtractor={(storyId, index) => storyId}
        renderItem={({item}) => <CommentItem commentId={item}></CommentItem>}
        initialNumToRender={10}
        maxToRenderPerBatch={10}
      />
    </View>
  );
}

export default CommentScreen;
