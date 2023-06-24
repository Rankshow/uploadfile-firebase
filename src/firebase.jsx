import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyBnuq2wYbvrmKkNsI6dzIjSmoQNbJo9mkU",
  authDomain: "uploadfile-94a09.firebaseapp.com",
  projectId: "uploadfile-94a09",
  storageBucket: "uploadfile-94a09.appspot.com",
  messagingSenderId: "130233406453",
  appId: "1:130233406453:web:64b17b9d8653a7d02246bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);