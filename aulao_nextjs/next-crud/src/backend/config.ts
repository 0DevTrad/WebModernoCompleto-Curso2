import firebase from "firebase";
import 'firebase/firestore'

if(!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: "AIzaSyDgGGys6Z4LrJhSmqHUBm1GXax623MLYaw",
        authDomain:"next-crud-b8f9b.firebaseapp.com",
        projectId: "next-crud-b8f9b",
    })
}

export default firebase