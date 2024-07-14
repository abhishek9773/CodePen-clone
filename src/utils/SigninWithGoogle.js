import { signInWithRedirect } from "firebase/auth";
import { auth } from "../config/Firebase.config";
import { GoogleAuthProvider } from "firebase/auth/web-extension";

const googelProvider = new GoogleAuthProvider();
const signinWithGoogle = async () => {
  await signInWithRedirect(auth, googelProvider).then((userCrad) => {
    window.location.reload();
  });
};

export default signinWithGoogle;
