import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import HTML from 'react-native-render-html';

import {getComment} from '../hackerApi';

const CommentItem = ({commentId}) => {
  const [comment, setComment] = useState(null);

  useEffect(() => {
    let mounted = true;
    const fetch = async () => {
      const comment = await getComment(commentId);
      if (mounted) {
        setComment(comment);
      }
    };
    fetch();

    return () => {
      mounted = false;
    };
  }, [commentId]);
  if (!comment) {
    return <View></View>;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{comment?.by} says</Text>
      <HTML source={{html: comment?.text ?? ''}} style={styles.text} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    paddingHorizontal: 10,
    borderColor: 'red',
    borderRadius: 8,
    backgroundColor: '#e3dfdc',
    shadowColor: '#000',
    shadowRadius: 8,
    shadowOpacity: 0.6,
    elevation: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  title: {
    marginVertical: 5,

    fontWeight: '600',
    fontSize: 16,
  },
  text: {
    marginVertical: 5,
    fontWeight: '300',
    fontSize: 12,
    paddingBottom: 3,
  },
});

export default CommentItem;
