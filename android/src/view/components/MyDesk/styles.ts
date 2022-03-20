import styled from 'styled-components/native';

export const Head = styled.View`
  height: 64px;
  min-width: 100%;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom-color: #e5e5e5;
  border-bottom-width: 1px;
  flex-direction: row;
  padding: 0 15px;
`;

export const TextHead = styled.Text`
  font-family: 'SF UI Text';
  font-size: 17px;
  line-height: 20px;
  color: #514d47;
`;

export const EscapedButton = styled.View`
  width: 20px;
`;

export const Image = styled.Image``;

export const OptionsButton = styled.View`
  width: 16px;
  height: 16px;
`;

export const Content = styled.View`
  height: 100%;
  padding: 0 15px;
`;

export const DeskItem = styled.View`
  min-width: 100px;
  border: 1px;
  border-color: #e5e5e5;
  border-radius: 4px;
  height: 59px;
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 15px;
  margin-top: 15px;
`;
