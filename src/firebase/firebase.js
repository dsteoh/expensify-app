import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBGNqCKdO8qLOaLdgu5qFZmSC1m_LOXLWQ",
    authDomain: "expensify-78423.firebaseapp.com",
    databaseURL: "https://expensify-78423.firebaseio.com",
    projectId: "expensify-78423",
    storageBucket: "",
    messagingSenderId: "1072435900552",
    appId: "1:1072435900552:web:f806e6f71ced5e96"
};

firebase.initializeApp(firebaseConfig);

firebase.database().ref().set({
    name: 'DS'
});
