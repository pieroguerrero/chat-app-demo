/**
 * To find your Firebase config object:
 *
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  apiKey: "AIzaSyDHyK1sEFzLKN1oeiMGhzBTQNfmPyK5DY4",
  authDomain: "friendlychat-47d64.firebaseapp.com",
  projectId: "friendlychat-47d64",
  storageBucket: "friendlychat-47d64.appspot.com",
  messagingSenderId: "220873075840",
  appId: "1:220873075840:web:ecab598d3fbf4364d20a65",
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error(
      "No Firebase configuration object provided." +
        "\n" +
        "Add your web app's configuration object to firebase-config.js"
    );
  } else {
    return config;
  }
}
