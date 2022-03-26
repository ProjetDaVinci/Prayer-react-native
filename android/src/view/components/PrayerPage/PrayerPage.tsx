import React, {FC} from 'react';
import {ItemPrayer, AddPrayers} from '..';
import {Content, ShowAll, ShowAllButton} from './styles';

const PrayerPage: FC = () => {
  return (
    <Content>
      <AddPrayers />
      <ItemPrayer />
      <ItemPrayer />
      <ItemPrayer />

      <ShowAll>
        <ShowAllButton title="Show Answered Prayers" color="#bfb393" />
      </ShowAll>
    </Content>
  );
};

export default PrayerPage;
