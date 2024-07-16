import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/Firebase.config";
import { HandleError } from "../../error/HandleError";

export const SignInWithEmailAndPassword = async (email, password) => {
  await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      if (userCredential) {
        console.log(userCredential.user);
      }
    })
    .catch((error) => {
      console.log("this is uer", error);
      if (error.message.includes("user-not-found")) {
        HandleError("Invalid id: UserNot Fround");
      } else if (error.message.includes("wrong-password")) {
        HandleError("Password Mismatch");
      } else if (error.message.includes("email-already-in-use")) {
        HandleError("Email is already Used");
      } else if (error.message.includes("weak-password")) {
        HandleError("Password must be more then 8 character ");
      } else if (error.message.includes("invalid-email")) {
        HandleError("Email is not valid ");
      } else {
        HandleError("Temporarily disable due to many failed login");
      }
    });
};
