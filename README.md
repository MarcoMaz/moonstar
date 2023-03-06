# Moonstar App
## Description
This is a simple responsive React/Ionic app that displays posts and comments retrieved from the [jsonplaceholder](https://jsonplaceholder.typicode.com) API.

## How to Install
- Clone the repository using `git clone https://github.com/MarcoMaz/moonstar.git`
- Navigate to the project directory using `cd moonstar`.
- Run `npm install` or `yarn` to install the dependencies.

## How to Run
- Navigate to the project directory using `cd moonstar`.
- Run `npm run start` or `yarn start` to start the app in development mode.
- Open [localhost](http://localhost:3000) to view it in the browser.

## How to Run Tests
- Navigate to the project directory using `cd moonstar`.
- Run `npm test` or `yarn test` to run the tests.

## Notes
Because of time limits, I didn't add any webpack configurations. 

Additionally, I am hesitant to make any modifications to the `react eject` process as it can be risky. However, I noticed the low score of unused JS and code compression when analyzing my project using Lighthouse. 

If I had more time, I would have utilized a tool such as [react-app-wired](https://www.npmjs.com/package/react-app-rewired) to rewire the app without making changes to react scripts. This would have allowed me to add some custom configurations, particularly focusing on removing any unused JS and compressing the code. 

By doing so, I could have improved my project's performance and overall score on Lighthouse.