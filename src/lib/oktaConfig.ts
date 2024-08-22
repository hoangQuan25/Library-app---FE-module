export const oktaConfig = {
  clientId: '0oaj4s06f1LbhNX2G5d7',
  issuer: 'https://dev-77812021.okta.com/oauth2/default',
  redirectUri: 'http://localhost:3000/login/callback',
  scopes: ['openid', 'profile', 'email'],
  pkce: true,
  disableHttpsCheck: true,
};
