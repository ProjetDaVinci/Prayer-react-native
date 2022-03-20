import styled from 'styled-components/native';
export const Head = styled.View`
  height: 64px;
  min-width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 0 15px;
`;

export const HeadContainer = styled.View`
  height: 103px;
  border-bottom-color: #e5e5e5;
  background: #ffffff;
  border-bottom-width: 1px;
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
  height: auto;
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
  border-bottom-color: ${props => (props.primary ? 'white' : 'palevioletred')};
`;

export const TextSelection = styled.Text`
  font-family: 'SF UI Text';
  font-size: 13px;
  line-height: 16px;
  color: #72a8bc;
  text-transform: uppercase;
`;
