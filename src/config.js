const yourOktaDomain = process.env.REACT_APP_OKTA_DOMAIN;
const clientId = process.env.REACT_APP_OKTA_CLIENT_ID;
const googleId = process.env.REACT_APP_GOOGLE_ID;

const oktaAuthConfig = {
    // Note: If your app is configured to use the Implicit flow
    // instead of the Authorization Code with Proof of Code Key Exchange (PKCE)
    // you will need to add `pkce: false`
    issuer: `https://${yourOktaDomain}/oauth2/default`,
    clientId: `${clientId}`,
    redirectUri: window.location.origin + '/login/callback',
    idps: [
      {type: 'GOOGLE', id: `${googleId}`},
    ],
  };
  
  const oktaSignInConfig = {
    baseUrl: `https://${yourOktaDomain}`,
    clientId: `${clientId}`,
    redirectUri: window.location.origin + '/login/callback',
    idps: [
      {type: 'GOOGLE', id: `${googleId}`},
    ],
    authParams: {
      // If your app is configured to use the Implicit flow
      // instead of the Authorization Code with Proof of Code Key Exchange (PKCE)
      // you will need to uncomment the below line
      // pkce: false
    }
    // Additional documentation on config options can be found at https://github.com/okta/okta-signin-widget#basic-config-options
  };
  
  export { oktaAuthConfig, oktaSignInConfig };
  