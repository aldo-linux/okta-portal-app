#
## Run the Okta Portal Application
1. Create ```.env``` file in the root directory with following contents
```
REACT_APP_OKTA_DOMAIN='dev-XXXXXX.oktapreview.com'
REACT_APP_OKTA_CLIENT_ID='xxxxxxxxxxxxxxxxxxxx'
REACT_APP_GOOGLE_ID='xxxxxxxxxxxxxxxxxxxx'
```
2. Install npm dependencies
```
npm install
```

3. Run the applications
```
npm start
```

## References
- [Sign in to SPA with embedded Widget](https://developer.okta.com/docs/guides/archive-sign-in-to-spa-embedded-widget/react/main/#add-an-openid-connect-client-in-okta)

- [Building Dashboards Quickly with React and Material-UI](https://medium.com/swlh/building-dashboards-quickly-with-react-and-material-ui-627074ff99ff)

## Known Issues / Resolutions
-  ```npx create-react-app``` creates a react starter application using ```react-router-dom v6``` by default. Tweak the package.json to version 5.3.3

# DECK

OBJECTIVE:
	Improve User Experience by understanding current sources of frustration
	Measure success on the rollout of new fueatures (i.e. MFA)
	Assist on KYC initiatives
	Proactively look for areas of improvement

INITIAL PROBLEM STATEMENT
	"We need to figure out what is causing the password reset and authentication issues"
	"I've started a password reset request but never received an email"
	"I attempted to reset my password but received an error message."
	"I'm having difficulties changing my password because the system doesn't seem to accept any of the new ones I try."
	"My password was successfully reset, however the new password does not work"
	"When I try to access a product, I get 403 error"
	
CHALLENGES:
	CIAM is not only about Security, UX is as important
	Quick response time (automation needed)
	Measure 
	
NEXT STEPS
	Full Redshift
	GCP for Incident classification
	BigQuery has a more natural way to correlate data

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
