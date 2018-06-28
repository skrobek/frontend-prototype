import * as React from 'react';
// import { Auth } from 'aws-amplify';
// import { Provider } from 'unstated';
import { Form as FormWrapper } from 'react-final-form';
import { Button, Form } from 'reactstrap';

import Input from './../../components/Form/Input/Input';
import './Login.css';


class Login extends React.Component {
  public submitForm = (values: object): void => {
    console.log(values);
    // Auth.signIn(username, password)
    //   .then(user => console.log(user))
    //   .catch(err => console.log(err));
  };

  public render(): JSX.Element {
    return (
      <div className="sign-up">
        <FormWrapper
          onSubmit={this.submitForm}
          // validate={null}
          render={({ handleSubmit, pristine, invalid }) => (
            <Form onSubmit={handleSubmit}>
              <Input name="username" label="Username" />
              <Input name="password" label="Password" />
              <Button color="primary" type="submit" disabled={pristine || invalid}>
                Submit
              </Button>
            </Form>
          )}
        />
      </div>
    );
  }
}

export default Login;



