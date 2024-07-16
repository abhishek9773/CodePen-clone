import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/Firebase.config";
import { connectStorageEmulator } from "firebase/storage";
import { HandleError } from "../../error/HandleError";

export const SignUpWithGmailandPassword = async (email, password) => {
  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      if (userCredential) {
        console.log(userCredential.user);
      }
    })
    .catch((error) => {
      console.log(error.message);
      if (error.message.inclues("auth/email-already-in-use")) {
        HandleError("Email is already try to login");
      }
    });
};
