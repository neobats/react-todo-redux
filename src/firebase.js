import firebase from 'firebase'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyABMoUQq1Eee5SRitHH_3tEM5A6PGYf0UM',
  authDomain: 'react-todos-with-complete.firebaseapp.com',
  databaseURL: 'https://react-todos-with-complete.firebaseio.com',
  projectId: 'react-todos-with-complete',
  storageBucket: 'react-todos-with-complete.appspot.com',
  messagingSenderId: '374532143413',
  appId: '1:374532143413:web:304397db478c93e6d9347c'
}
// Initialize Firebase
export default (!firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app())

export const todosRef = firebase
  .database()
  .ref()
  .child('todos')
