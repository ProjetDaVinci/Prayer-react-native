import styled from 'styled-components/native';
export const TextHead = styled.Text`
  font-family: 'SF UI Text';
  font-size: 14px;
  line-height: 20px;
`;

export const SubscribedBlock = styled.View`
  right: -40px;
  position: absolute;
  width: 16px;
  height: 16px;
  border-radius: 20px;
  background-color: #ac5253;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(3px) translateX(3px);
`;

export const Subscribed = styled.Text`
  color: #ffffff;
  font-size: 9px;
  line-height: 11px;
  font-weight: bold;
`;
