import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/containers/App';
import * as serviceWorker from './serviceWorker';
import * as firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAaRQjOzpFN8qjHAwNTW88dqSjFi0pbc4w",
  authDomain: "futuretube-newton-davi.firebaseapp.com",
  databaseURL: "https://futuretube-newton-davi.firebaseio.com",
  projectId: "futuretube-newton-davi",
  storageBucket: "futuretube-newton-davi.appspot.com",
  messagingSenderId: "691392087161",
  appId: "1:691392087161:web:5691339b72bbb205e4c0a8"
};

firebase.initializeApp(firebaseConfig);

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
