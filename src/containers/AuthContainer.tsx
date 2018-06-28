import { Container } from 'unstated';
import { Auth } from 'aws-amplify';
import { CognitoAuthSession } from 'amazon-cognito-auth-js';
import { CognitoUser, CognitoUserSession } from 'amazon-cognito-identity-js';

interface IUser {
  email: string
  phone: string
  name: string
};

interface IAuthState {
  isAuthenticated: boolean
  loadingSession: boolean,
  requestLogin: boolean,
  user: IUser | null
};

class AuthContainer extends Container<IAuthState> {
  public state: IAuthState = {
    isAuthenticated: false,
    loadingSession: true,
    requestLogin: false,
    user: null
  };

  public getSession = async (): Promise<void> => {
    try {
      const session: CognitoAuthSession = await Auth.currentSession();

      if (session) {
        const isAuthenticated: boolean = session.isValid();
        await this.setUserData(isAuthenticated);

        await this.setState({
          isAuthenticated,
          loadingSession: false
        });
      }
    } catch (e) {
      this.setState({ loadingSession: false });
    }
  };

  public login = async (username: string, password: string): Promise<void> => {
    await this.setState({ requestLogin: true });
    const user: CognitoUser = await Auth.signIn(username, password);
    const userSession: CognitoUserSession | null = user.getSignInUserSession();

    const isAuthenticated: boolean = userSession ? userSession.isValid() : false;
    await this.setUserData(isAuthenticated);

    await this.setState({
      isAuthenticated,
      requestLogin: false
    });
  };

  public logout = async (): Promise<void> => {
    await this.setState({ isAuthenticated: false, user: null });
    await Auth.signOut();
  };

  private setUserData = async (isAuthenticated: boolean): Promise<void> => {
    if (isAuthenticated) {
      const user = await Auth.currentUserInfo();
      const userData: IUser = {
        email: user.attributes.email,
        phone: user.attributes.phone_number,
        name: user.attributes.name
      };

      await this.setState({ user: userData })
    }
  }
}

export default AuthContainer;
