import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import FeedScreen from './screens/FeedScreen';
import ArticleScreen from './screens/ArticleScreen';
import CommentScreen from './screens/CommentScreen';

const Stack = createStackNavigator();

function AppRouter() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Feed" component={FeedScreen} />
        <Stack.Screen name="Article" component={ArticleScreen} />
        <Stack.Screen name="Comment" component={CommentScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppRouter;
