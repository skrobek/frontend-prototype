import * as React from 'react';
import { FieldRenderProps } from 'react-final-form';
import { Field } from 'react-final-form';

import {
  FormGroup,
  Label,
  Input as ReactInput,
} from 'reactstrap';


const InputRender: React.StatelessComponent<FieldRenderProps> = ({ input, meta, ...rest }): JSX.Element => {
  return (
    <ReactInput
      {...input}
      {...rest}
    />
  );
};

interface IInput {
  label: string
  name: string
  placeholder?: string
  type?: string
};


const Input: React.StatelessComponent<IInput> = ({ label, placeholder, name, type }): JSX.Element => (
  <FormGroup>
    <Label for={name}>{label}</Label>
    <Field
      name={name}
      component={InputRender}
      placeholder={placeholder}
      type={type || 'text'}
    />
  </FormGroup>
);



export default Input;