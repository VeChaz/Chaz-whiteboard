# Chaz-whiteboard
 
A whiteboard app with Pusher Collaboration. It's created with React, Electron, and Pusher.

### Prerequisites

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/en/)
- [Pusher](https://pusher.com/)

## Getting Started

1. Clone the repo:

```
git clone https://github.com/VeChaz/Chaz-whiteboard.git
cd Chaz-whiteboard
```

2. Copy the `node_modules/react-sketch/dist/index.js` file somewhere else and delete the `node_modules` folder.

3. Run "yarn" to install the dependencies:

```
yarn
```

4. Update `.env` and `server/.env` file with your credentials from Pusher (App Keys). 

5. Paste the `node_modules/react-sketch/dist/index.js` file that you copied earlier and overwrite the new one that's been installed from yarn. 

6. Run the App:
- In separate terminal run “node server” to start the server from /server directory
- In main/other terminal then run "yarn start" on the root of the project

```
node server
yarn start
```

7. Open up 2+ browser windows side by side to see the collaboration between live events/drawing for your private channel/whiteboard session.

8. Create build files for production:

```
yarn build
```

## Hosted site (Server from my end needs to be running for login to work)
- http://test.vechain.tools/


## Built With

- [Electron](https://electronjs.org/)
- [React](https://reactjs.org/)
- [Pusher](https://pusher.com/)
