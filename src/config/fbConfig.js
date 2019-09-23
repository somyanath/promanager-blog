import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: "AIzaSyCiJtFPBrC5ngr5QvBnLSS0ft16UVep0r4",
  authDomain: "promanager-3028f.firebaseapp.com",
  databaseURL: "https://promanager-3028f.firebaseio.com",
  projectId: "promanager-3028f",
  storageBucket: "",
  messagingSenderId: "9447939878",
  appId: "1:9447939878:web:c3d5a61aa9c2f0786c6be7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;