import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyB3GHfKEHGHeZDGSEYLE8OVS_txUBrhZR4",
  authDomain: "fir-udd-5a11e.firebaseapp.com",
  projectId: "fir-udd-5a11e",
  storageBucket: "fir-udd-5a11e.appspot.com",
  messagingSenderId: "239761808728",
  appId: "1:239761808728:web:ca8296669c7e654eed192d"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)