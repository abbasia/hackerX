const BASE_URL = 'https://hacker-news.firebaseio.com/v0';
const TOP_STORIES_URL = `${BASE_URL}/topstories.json`;

var cache = {
  stories: [],
  comments: [],
};

export const getTopStories = async () => {
  try {
    let response = await fetch(TOP_STORIES_URL);
    let json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
  return null;
};
export const getStory = async storyId => {
  try {
    const story = cache.stories.find(story => story.id === storyId);
    if (story) {
      //console.log('story found');
      Promise.resolve(story);
    }

    let json = await fetchStory(storyId);
    cache = {...cache, stories: [...cache.stories, json]};
    return json;
  } catch (error) {
    console.error(error);
  }
};

export const getComment = async commentId => {
  try {
    const comment = cache.comments.find(comment => comment.id === commentId);
    if (comment) {
      //console.log('comment found');
      Promise.resolve(comment);
    }

    let json = await fetchStory(commentId);
    cache = {...cache, comments: [...cache.comments, json]};
    return json;
  } catch (error) {
    console.error(error);
  }
};

export const fetchStory = async storyId => {
  let uri = `${BASE_URL}/item/${storyId}.json`;
  let response = await fetch(uri);
  let json = await response.json();
  return json;
};
