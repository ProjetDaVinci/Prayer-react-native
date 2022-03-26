import React, {FC} from 'react';
import Plus from '../../icons/Plus';
import {
  AddMembers,
  AvatarContainer,
  ItemImage,
  MembersContainer,
  MembersTitle,
} from './styles';

const Members: FC = () => {
  return (
    <MembersContainer>
      <MembersTitle>Members</MembersTitle>
      <AvatarContainer>
        <ItemImage source={require('../../../assets/eeww.png')} />
        <AddMembers>
          <Plus fillPath="#fff" onPress={() => console.log('adsdas')} />
        </AddMembers>
      </AvatarContainer>
    </MembersContainer>
  );
};

export default Members;
