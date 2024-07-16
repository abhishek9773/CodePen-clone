import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/Firebase.config";
import { connectStorageEmulator } from "firebase/storage";

export const SignUpWithGmailandPassword = async (email, password) => {
  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      if (userCredential) {
        console.log(userCredential.user);
      }
    })
    .catch((error) => console.log(error));
};
