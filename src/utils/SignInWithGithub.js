import { GithubAuthProvider, signInWithRedirect } from "firebase/auth";
import { auth } from "../config/Firebase.config";

const provider = new GithubAuthProvider();
export const SignInWithGithub = async () => {
  await signInWithRedirect(auth, provider).then((result) => {
    window.location.reload();
  });
};
