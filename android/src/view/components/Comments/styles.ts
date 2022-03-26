import styled from 'styled-components/native';

export const ItemContainer = styled.View`
  display: flex;
  padding: 15px;
  justify-content: center;
  border: 1px solid #e5e5e5;
  width: 50%;
  height: 120px;
`;
export const CommentsTitle = styled.Text`
  color: #72a8bc;
  font-size: 13px;
  text-transform: uppercase;
  padding: 0 15px;
  margin-bottom: 15px;
`;
export const CommentItem = styled.View`
  border: 1px solid;
  border-color: #e5e5e5;
  height: 74px;
`;

export const CommentsContainer = styled.View``;

export const TextContainer = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Head = styled.View`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  align-content: space-around;
`;

export const HeadText = styled.Text`
  font-weight: bold;
  font-family: 'SF UI Text';
  font-size: 17px;
  line-height: 20px;
  color: #514d47;
`;

export const CommentsText = styled.Text`
  font-family: 'SF UI Text';
  font-size: 17px;
  line-height: 20px;
  color: #514d47;
`;

export const WhenAdded = styled.Text`
  font-family: 'SF UI Text';
  font-size: 13px;
  line-height: 16px;
  color: #9c9c9c;
  margin-left: 6px;
`;

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 15px;
`;

export const ItemImage = styled.Image`
  border-radius: 50px;
  margin-right: 8px;
`;
