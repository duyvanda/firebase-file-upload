import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCe3SlxSeVu9Z_3IvN3Hq5W8bWev2rkm-c",
  authDomain: "uploadingfile-61603.firebaseapp.com",
  projectId: "uploadingfile-61603",
  storageBucket: "uploadingfile-61603.appspot.com",
  messagingSenderId: "673256995363",
  appId: "1:673256995363:web:2f7acad1b59daa4f7b0f96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
