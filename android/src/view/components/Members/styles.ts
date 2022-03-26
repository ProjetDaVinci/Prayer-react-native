import styled from 'styled-components/native';

export const ItemContainer = styled.View`
  display: flex;
  padding: 15px;
  justify-content: center;
  border: 1px solid #e5e5e5;
  width: 50%;
  height: 120px;
`;
export const MembersTitle = styled.Text`
  color: #72a8bc;
  font-size: 13px;
  text-transform: uppercase;
`;
export const ItemImage = styled.Image`
  border-radius: 50px;
  margin-right: 8px;
`;

export const MembersContainer = styled.View`
  //   display: flex;
  //   flex-direction: row;
  padding: 20px 15px;
`;

export const AddMembers = styled.View`
  background: #bfb393;
  height: 32px;
  width: 32px;
  border-radius: 50px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AvatarContainer = styled.View`
  align-items: center;
  display: flex;
  flex-direction: row;
  padding: 15px 0;
`;
