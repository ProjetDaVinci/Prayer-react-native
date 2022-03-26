import styled from 'styled-components/native';

export const Content = styled.View`
  height: 100%;
  background: #ffffff;
`;

export const ShowAll = styled.View`
  width: 60%;
  margin: 16px auto;
  overflow: hidden;
  border-radius: 15px;
`;

export const ShowAllButton = styled.Button`
  height: 30px;
`;

export const LastPrayed = styled.View`
  height: 50px;
  padding: 0 15px;

  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const LastPrayedText = styled.Text`
  color: #514d47;
  font-size: 17px;
  line-height: 20px;
  margin-left: 10px;
  font-family: 'SF UI Text';
`;
export const DetailsContainer = styled.View`
  display: flex;
  flex-direction: row;
`;
