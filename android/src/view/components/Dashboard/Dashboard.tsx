import React, {FC} from 'react';
import {useWindowDimensions, View} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {Header, PrayerPage} from '..';
import {Subscribed, SubscribedBlock, TextHead} from './styles';

const FirstRoute = () => <PrayerPage />;

const SecondRoute = () => <PrayerPage />;

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

const Dashboard: FC = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'MY PRAYERS'},
    {key: 'second', title: 'SUBSCRIBED'},
  ]);

  const renderTabBar = (props: any) => (
    <TabBar
      {...props}
      indicatorStyle={{backgroundColor: '#72A8BC'}}
      style={{backgroundColor: 'white'}}
      renderLabel={({route, focused}) => (
        <TextHead
          style={{
            color: focused ? '#72A8BC' : '#C8C8C8',
          }}>
          {route.title}
          {route.title === 'SUBSCRIBED' ? (
            <SubscribedBlock>
              <Subscribed>3</Subscribed>
            </SubscribedBlock>
          ) : (
            ''
          )}
        </TextHead>
      )}
    />
  );

  return (
    <>
      <Header />
      <TabView
        renderTabBar={renderTabBar}
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
      />
    </>
  );
};

export default Dashboard;
