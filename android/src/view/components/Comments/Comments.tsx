import React, {FC} from 'react';
import {AddComment} from '..';
import {
  CommentItem,
  CommentsContainer,
  CommentsText,
  CommentsTitle,
  Container,
  Head,
  HeadText,
  ItemImage,
  TextContainer,
  WhenAdded,
} from './styles';

const Comments: FC = () => {
  return (
    <CommentsContainer>
      <CommentsTitle>Comments</CommentsTitle>
      <CommentItem>
        <Container>
          <ItemImage source={require('../../../assets/Barber.png')} />
          <TextContainer>
            <Head>
              <HeadText>Anna Barber</HeadText>
              <WhenAdded>2 days ago</WhenAdded>
            </Head>
            <CommentsText>Hey, Hey!</CommentsText>
          </TextContainer>
        </Container>
      </CommentItem>
      <AddComment />
    </CommentsContainer>
  );
};

export default Comments;
