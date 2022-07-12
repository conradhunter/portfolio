import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDXXi6DdYSXEl3xNj0RAv4_55yyPAqG-yw",
    authDomain: "portfolio-blog-ec115.firebaseapp.com",
    projectId: "portfolio-blog-ec115",
    storageBucket: "portfolio-blog-ec115.appspot.com",
    messagingSenderId: "499267602662",
    appId: "1:499267602662:web:e7ef30e591c813c4a35327",
    measurementId: "G-YPQDW7CX5R"
  };

  //Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getFirestore(app);

  export { db };