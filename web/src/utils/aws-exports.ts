export const cognito = {
  mandatorySignIn: process.env.NEXT_PUBLIC_COGNITO_MANDATORY_SIGN_IN,
  region: process.env.NEXT_PUBLIC_COGNITO_REGION,
  userPoolId: process.env.NEXT_PUBLIC_COGNITO_USER_POOL_ID,
  userPoolWebClientId: process.env.NEXT_PUBLIC_COGNITO_USER_POOL_WEB_CLIENT_ID,
  authenticationFlowType: 'USER_PASSWORD_AUTH',
  oauth: {
    domain: 'auth-qa.selinafinance.co.uk',
    scope: ['email', 'profile', 'openid'],
    redirectSignIn: 'http://localhost:3000/',
    redirectSignOut: 'http://localhost:3000/',
    responseType: 'token',
  },
};
