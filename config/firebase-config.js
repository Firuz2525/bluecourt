import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDyYnlzugCVxQF1xdbny_3YOZOHL37uQ2g",
  authDomain: "bobhotel-caba0.firebaseapp.com",
  projectId: "bobhotel-caba0",
  storageBucket: "bobhotel-caba0.firebasestorage.app",
  messagingSenderId: "237096103164",
  appId: "1:237096103164:web:37b1c32d023a7bfd143b79",
  measurementId: "G-XDYDK0QPQR",
};
// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_APIKEY,
//   authDomain: process.env.NEXT_PUBLIC_AUTHDOMAIN,
//   projectId: process.env.NEXT_PUBLIC_PROJECTID,
//   storageBucket: process.env.NEXT_PUBLIC_STORAGEBUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_MESSAGINGSENDERID,
//   appId: process.env.NEXT_PUBLIC_APPID,
// };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
