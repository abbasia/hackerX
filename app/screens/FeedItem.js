import React, {useState, useEffect} from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';

import {getStory} from '../hackerApi';

const FeedItem = ({storyId, onPress, onCommentPress}) => {
  const [story, setStory] = useState(null);

  useEffect(() => {
    let mounted = true;
    const fetch = async () => {
      const story = await getStory(storyId);

      if (mounted) {
        setStory(story);
      }
    };
    fetch();

    return () => {
      mounted = false;
    };
  }, [storyId]);

  const handlePress = () => {
    onPress(story);
  };

  const handleCommentPress = () => {
    if (story.kids.length > 0) {
      onCommentPress(story);
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Text style={styles.title}>{story?.title}</Text>
      <View style={styles.bottomContainer}>
        <View style={styles.authorContainer}>
          <Text>author: {story?.by}</Text>
        </View>
        <View style={styles.commentContainer}>
          <TouchableOpacity onPress={handleCommentPress}>
            <Text> {story?.kids?.length ?? 0} comments</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 80,
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
  separator: {
    backgroundColor: '#d1e0ed',
    height: 0,
  },
  title: {
    marginTop: 5,
    fontWeight: '600',
    fontSize: 16,
  },
  author: {
    marginVertical: 5,
    fontWeight: '300',
    fontSize: 12,
    paddingBottom: 3,
  },
  comments: {
    marginVertical: 5,
    fontWeight: '300',
    fontSize: 12,
    marginLeft: 10,
  },
  bottomContainer: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 2,
  },
  authorContainer: {
    flex: 1,
    marginRight: 5,
    marginTop: 10,
    alignItems: 'flex-start',
  },
  commentContainer: {
    flex: 1,
    marginLeft: 5,
    marginTop: 10,
    alignItems: 'flex-end',
  },
});

export default FeedItem;
