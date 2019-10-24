import React from 'react';
import { View, StyleSheet } from 'react-native';

import FeedList from '../components/FeedList';
import Posts from '../constants/Posts';
import useBasicQuery from '../useBasicQuery';
import useLayout from '../useLayout';
import dispatch from '../rematch/dispatch';
import SplashScreen from '../components/SplashScreen';

export default function HomeScreen() {
  const { onLayout, width } = useLayout();
  const [isShowingSplashScreen, setShowingSplash] = React.useState(true);
  let lastWidth = NaN;
  React.useEffect(() => {
    if (width != null && width !== lastWidth) {
      lastWidth = width;
      setShowingSplash(false);
    }
  }, [width]);

  return (
    <View
      onLayout={onLayout}
      style={{
        backgroundColor: 'rgb(250,250,250)',
        flex: 1,
        alignItems: width >= 600 ? 'center' : 'stretch',
      }}
    >
      <FeedList isLarge={width >= 600} style={styles.container} data={Posts} />
      {isShowingSplashScreen && <SplashScreen />}
    </View>
  );
}
HomeScreen.navigationOptions = {
  title: 'Instagram',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: 600,

    backgroundColor: 'transparent',
  },
});
