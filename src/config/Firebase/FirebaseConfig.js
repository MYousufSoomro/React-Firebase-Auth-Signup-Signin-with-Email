import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAdd2_8Qp9c3NS1CfjP4ZacEw7Zo3W8z7c",
  authDomain: "react-router-dynamic-routes.firebaseapp.com",
  projectId: "react-router-dynamic-routes",
  storageBucket: "react-router-dynamic-routes.appspot.com",
  messagingSenderId: "732003834495",
  appId: "1:732003834495:web:4540451fa6ce175d6efd4a"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {
    auth
}