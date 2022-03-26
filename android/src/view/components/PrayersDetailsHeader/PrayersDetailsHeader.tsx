import React, {FC} from 'react';
import Back from '../../icons/Back';
import PrayerIcon from '../../icons/PrayerIcon';
import {
  EscapedButton,
  Head,
  HeadContainer,
  OptionsButton,
  Selection,
  SelectionBlock,
  TextHead,
  TextSelection,
} from './styles';

const PrayersDetailsHeader: FC = () => {
  return (
    <HeadContainer>
      <Head>
        <EscapedButton>
          <Back />
        </EscapedButton>
        <OptionsButton>
          <PrayerIcon fillPath={'#fff'} onPress={() => console.log('a,j,a')} />
        </OptionsButton>
      </Head>
      <TextHead>
        Prayer item two which is for my family to love God whole heartedly.
      </TextHead>
    </HeadContainer>
  );
};

export default PrayersDetailsHeader;
