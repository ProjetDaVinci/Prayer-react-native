import styled from 'styled-components/native';
export const Head = styled.View`
  height: 64px;
  min-width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const HeadContainer = styled.View`
  background: #bfb393;
  padding: 0 15px;
`;

export const TextHead = styled.Text`
  font-family: 'SF UI Text';
  font-size: 17px;
  line-height: 20px;
  color: #ffffff;
  padding-bottom: 23px;
`;

export const EscapedButton = styled.View`
  width: 20px;
`;

export const Image = styled.Image``;

export const OptionsButton = styled.View`
  width: 16px;
  height: auto;
  margin-right: 15px;
`;

export const Selection = styled.View`
  height: 39px;
  min-width: 100%;
  display: flex;
  flex-direction: row;
`;
export const SelectionBlock = styled.View`
  width: 50%;
  display: flex;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: blue;
`;

export const TextSelection = styled.Text`
  font-family: 'SF UI Text';
  font-size: 13px;
  line-height: 16px;
  color: #72a8bc;
  text-transform: uppercase;
`;
