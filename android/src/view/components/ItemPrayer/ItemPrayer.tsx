import React, {FC} from 'react';
import State from '../../icons/State';
import {Block, CardBlock, TextIcon, TextSelection} from './styles';
import CheckBox from '@react-native-community/checkbox';
import UserIcon from '../../icons/UserIcon';
import PrayerIcon from '../../icons/PrayerIcon';

const ItemPrayer: FC = () => {
  return (
    <CardBlock>
      <Block>
        <State />
        <CheckBox style={{marginLeft: 6, marginRight: 15}} />
        <TextSelection>Prayer item two..</TextSelection>
      </Block>
      <Block>
        <UserIcon />
        <TextIcon>1</TextIcon>
        <PrayerIcon style={{marginLeft: 4}} />
        <TextIcon>120</TextIcon>
      </Block>
    </CardBlock>
  );
};

export default ItemPrayer;
