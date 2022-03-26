import React, {FC} from 'react';
import {DetailsContainer, ItemContainer, ItemInfo, ItemTitle} from './styles';

const DetailsItem: FC = () => {
  const arrayDetails = [
    {
      title: 'July 25 2017',
      info: 'Date Added',
    },
    {
      title: '123',
      info: 'Times Prayed Total',
    },
    {
      title: '63',
      info: 'Times Prayed by Me',
    },
    {
      title: '60',
      info: 'Times Prayed by Others',
    },
  ];

  return (
    <DetailsContainer>
      {arrayDetails.map((item, key) => (
        <ItemContainer key={key}>
          <ItemTitle>{item.title}</ItemTitle>
          <ItemInfo>{item.info}</ItemInfo>
        </ItemContainer>
      ))}
    </DetailsContainer>
  );
};

export default DetailsItem;
