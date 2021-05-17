import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCeCUbof01TG1H3Ej80sCWDp3pVR8AaCjU",
  authDomain: "aqnorman-vpn.firebaseapp.com",
  databaseURL: "https://aqnorman-vpn-default-rtdb.firebaseio.com/",
  projectId: "aqnorman-vpn",
  storageBucket: "aqnorman-vpn.appspot.com",
  messagingSenderId: "649791970207",
  appId: "1:649791970207:web:59eb9f4b0c31d3fe867baa",
  measurementId: "G-N8QD96P3SN"
};

if (!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default firebase;