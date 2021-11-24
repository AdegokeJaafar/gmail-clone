import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyD93ZHkACLuN7j97Z94T0YOIH3CkTNicWU",
    authDomain: "clone-77c47.firebaseapp.com",
    projectId: "clone-77c47",
    storageBucket: "clone-77c47.appspot.com",
    messagingSenderId: "552981280402",
    appId: "1:552981280402:web:5c88aff63e420d1d07d84b",
    measurementId: "G-WXPS5F2XCR"
  };
// init firebase app
  initializeApp(firebaseConfig)

//   init services
  const db = getFirestore()
  const auth = getAuth()
  const provider = new getAuth.GoogleAuthProvider()


//   collection ref
  // const colRef = collection(db, 'mail')

//   get collectin data
// getDocs(colRef)
//   .then((snapshot) => {
    
//   })
//   .catch(err => {
//      console.log(err.message); 
//   })

//   onSnapshot(colRef, (snapshot) => {
//     let mail = []
//     snapshot.docs.forEach((doc) => {
//         mail.push({ ...doc.data(), id: doc.id })
//     })
//     console.log(mail);

//   })

  export { db, auth, provider}