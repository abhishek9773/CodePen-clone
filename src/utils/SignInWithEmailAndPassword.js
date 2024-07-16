import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/Firebase.config";

export const SignInWithEmailAndPassword = async (email, password) => {
  await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      if (userCredential) {
        console.log(userCredential.user);
      }
    })
    .catch((error) => console.log(error));
};
