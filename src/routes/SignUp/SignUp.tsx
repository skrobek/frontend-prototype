import * as React from 'react';
import { Component } from 'react';

import { Auth } from 'aws-amplify';
// import { Provider } from 'unstated';
import { Form as FormWrapper } from 'react-final-form';
import { Button, Form } from 'reactstrap';

import Input from './../../components/Form/Input/Input';
import './SignUp.css';

interface ILoginFormValues {
  username: string
  password: string
  phone: string
  name: string
};


class SignUp extends Component {
  public submitForm = (values: ILoginFormValues): void => {
    const { username, password, phone, name } = values;

    const authData = {
      username,
      password,
      attributes: {
        phone_number: phone,
        name,
        profile: ''
      },
      validationData: []
    };

    Auth.signUp(authData)
      .then(data => console.log(data))
      .catch(err => console.log(err));
  };

  public render(): JSX.Element {
    return (
      <div className="signup">
        <FormWrapper
          initialValues={{
            username: 'pskrobek@gmail.com',
            name: 'Pawel Skroban',
            phone: '+48603343037',
            password: 'skrobek00'
          }}
          onSubmit={this.submitForm}
          // validate={null}
          render={({ handleSubmit, pristine, invalid }): JSX.Element => (
            <Form onSubmit={handleSubmit}>
              <Input name="username" label="Username" type="email" />
              <Input name="name" label="Name" />
              <Input name="phone" label="Phone Number" />
              <Input name="password" label="Password" type="password" />
              <Button color="primary" type="submit" disabled={invalid}>
                Submit
              </Button>
            </Form>
          )}
        />
      </div>
    );
  }
}

export default SignUp;



