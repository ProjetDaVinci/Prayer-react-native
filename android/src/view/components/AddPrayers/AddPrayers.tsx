import React, {FC} from 'react';
import {Field, Form} from 'react-final-form';
import {View, TextInput} from 'react-native';
import Plus from '../../icons/Plus';
import {FormContainer, TextHead} from './styles';

const AddPrayers: FC = () => {
  const validate = (values: any) => {
    const errors = {};
    // alert(JSON.stringify(values))
    return errors;
  };

  const handleSubmit = (values: any) => {
    // alert(JSON.stringify(values))
  };

  return (
    <Form
      onSubmit={handleSubmit}
      validate={(values: any) => {
        return validate(values);
      }}
      render={({handleSubmit}) => (
        <FormContainer>
          <Plus onPress={handleSubmit} />
          <Field name="FieldName" placeholder="Add a prayer...">
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
        </FormContainer>
      )}
    />
  );
};

export default AddPrayers;
