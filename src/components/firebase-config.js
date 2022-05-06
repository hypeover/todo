import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAAT8SV8RCdnzd7VSoCP7y28valu9Is9lk",
  authDomain: "todo-66de7.firebaseapp.com",
  projectId: "todo-66de7",
  storageBucket: "todo-66de7.appspot.com",
  messagingSenderId: "89335580962",
  appId: "1:89335580962:web:294dfef3c868b97d95bd7b"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

export default app