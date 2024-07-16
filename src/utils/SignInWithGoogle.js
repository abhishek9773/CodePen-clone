import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { auth } from "../config/Firebase.config";

export const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  await signInWithRedirect(auth, provider).then((result) => {
    window.location.reload();
  });
};
