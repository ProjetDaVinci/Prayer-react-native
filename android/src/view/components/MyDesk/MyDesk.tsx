import React, {FC} from 'react';
import {Text, View} from 'react-native';
import Plus from '../../icons/Plus';
import {
  Content,
  DeskItem,
  EscapedButton,
  Head,
  Image,
  OptionsButton,
  TextHead,
} from './styles';

const MyDesk: FC = () => {
  return (
    <>
      <Head>
        <EscapedButton></EscapedButton>
        <TextHead>MyDesk</TextHead>
        <OptionsButton>
          <Plus />
        </OptionsButton>
      </Head>
      <Content>
        <DeskItem>
          <TextHead>To do</TextHead>
        </DeskItem>
        <DeskItem>
          <TextHead>In Progress</TextHead>
        </DeskItem>
        <DeskItem>
          <TextHead>Completed</TextHead>
        </DeskItem>
      </Content>
    </>
  );
};

export default MyDesk;
