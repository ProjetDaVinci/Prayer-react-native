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
          <Settings onPress={() => console.log('a,j,a')} />
        </OptionsButton>
      </Head>
    </HeadContainer>
  );
};

export default Header;
