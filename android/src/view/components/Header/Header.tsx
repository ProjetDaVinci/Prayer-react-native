import React, {FC} from 'react';
import Settings from '../../icons/Settings';
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

const Header: FC = () => {
  return (
    <HeadContainer>
      <Head>
        <EscapedButton></EscapedButton>
        <TextHead>To do</TextHead>
        <OptionsButton>
          <Settings />
        </OptionsButton>
      </Head>
      <Selection>
        <SelectionBlock primary>
          <TextSelection>MY PRAYERS</TextSelection>
        </SelectionBlock>
        <SelectionBlock>
          <TextHead>SUBSCRIBED</TextHead>
        </SelectionBlock>
      </Selection>
    </HeadContainer>
  );
};

export default Header;
