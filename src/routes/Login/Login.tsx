import * as React from 'react';
import { Component } from 'react';
import { Subscribe } from 'unstated';
import { Form as FormWrapper } from 'react-final-form';
import { Button, Form } from 'reactstrap';
import { RouteComponentProps } from 'react-router';
import { withRouter } from 'react-router-dom';

import AuthContainer from '../../containers/AuthContainer';

import Input from './../../components/Form/Input/Input';
import Loader from '../../components/Loader/Loader';

import './Login.css';

export interface ILoginForm {
  username: string
  password: string
};

interface ILoginFormProps extends RouteComponentProps<{}> {
  isAuthenticated: boolean
};

class Login extends Component<ILoginFormProps> {
  public componentDidUpdate(prevProps): void {
    if (this.props.isAuthenticated !== prevProps.isAuthenticated) {
      if (this.props.isAuthenticated) {
        this.props.history.push('/');
      }
    }
  }

  public submitForm = (values: ILoginForm, container: any): void => {
    container.login(values.username, values.password);
  }

  public render(): React.ReactNode {
    return (
      <div className="login">
        <Subscribe to={[AuthContainer]}>
          {authContainer => (
            <FormWrapper
              initialValues={{ username: 'pskrobek@gmail.com', password: 'skrobek00' }}
              onSubmit={(values: ILoginForm) => this.submitForm(values, authContainer)}
              // validate={null}
              render={({ handleSubmit, pristine, invalid }) => (
                <Form onSubmit={handleSubmit}>
                  <Input name="username" label="Username" type="email" />
                  <Input name="password" label="Password" type="password" />
                  <Button color="primary" type="submit" disabled={invalid || authContainer.state.requestLogin}>
                    Submit
                  </Button>
                  {authContainer.state.requestLogin &&
                    <Loader />
                  }
                </Form>
              )}
            />
          )}
        </Subscribe>
      </div>
    );
  }
}

export default withRouter(Login);

