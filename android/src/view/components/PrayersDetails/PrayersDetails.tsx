import React, {FC} from 'react';
import {ScrollView} from 'react-native';
import {DetailsItem, Members, PrayersDetailsHeader, Comments} from '..';
import State from '../../icons/State';
import {Content, LastPrayed, LastPrayedText} from './styles';

const PrayerDetails: FC = () => {
  return (
    <ScrollView>
      <PrayersDetailsHeader />
      <Content>
        <LastPrayed>
          <State />
          <LastPrayedText>Last prayed 8 min ago</LastPrayedText>
        </LastPrayed>
        <DetailsItem />
        <Members />
        <Comments />
      </Content>
    </ScrollView>
  );
};

export default PrayerDetails;
