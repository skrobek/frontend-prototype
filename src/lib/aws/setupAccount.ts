
import Amplify from 'aws-amplify';

const setupAccount = (): void => {
  Amplify.configure({
    Auth: {
      identityPoolId: 'eu-central-1:0a81f080-ad43-4749-840f-d30bdb1e644b',
      region: 'eu-central-1',
      userPoolId: 'eu-central-1_6DS4QKwLA',
      userPoolWebClientId: '3k9qgs97mgeeitfrhpqb6385dj'
    }
  });
};

export default setupAccount;