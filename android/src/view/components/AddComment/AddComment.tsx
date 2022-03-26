import React, {FC} from 'react';
import {Field, Form} from 'react-final-form';
import {View, TextInput} from 'react-native';
import Plus from '../../icons/Plus';
import Stroke from '../../icons/Stroke';
import {AddCommentsBlock} from './styles';

const AddComment: FC = () => {
  const validate = (values: any) => {
    const errors = {};
    // alert(JSON.stringify(values))
    return errors;
  };

  const handleSubmit = (values: any) => {
    // alert(JSON.stringify(values))
  };

  //   <AddText></AddText>;

  return (
    <Form
      onSubmit={handleSubmit}
      validate={(values: any) => {
        return validate(values);
      }}
      render={({handleSubmit}) => (
        <AddCommentsBlock>
          <Stroke fillPath="#BFB393" />
          <Field name="FieldName" placeholder="Add a comment...">
            {({input, meta, placeholder}) => {
              let showToolTip = false;
              if (meta.error && meta.visited && !meta.active) {
                showToolTip = true;
              } else {
                showToolTip = false;
              }
              return (
                <View>
                  <TextInput placeholder={placeholder} />
                  {/* <Text>{meta.error}</Text> */}
                </View>
              );
            }}
          </Field>
        </AddCommentsBlock>
      )}
    />
  );
};

export default AddComment;
