import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDMaxSMZ2fNc88ZZlRTHSVmpMm5GcRcWYU",
    authDomain: "goalcoach-c80cd.firebaseapp.com",
    databaseURL: "https://goalcoach-c80cd.firebaseio.com",
    projectId: "goalcoach-c80cd",
    storageBucket: "",
    messagingSenderId: "90241382097"
  };

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
export const completeGoalRef = firebase.database().ref('completeGoals');
export const redRef = firebase.database().ref('redGoals');
export const blueRef = firebase.database().ref('blueGoals');
