import { auth } from "../../config/Firebase.config";

export const signOutAction = async () => {
  await auth.signOut().then(() => window.location.reload());
};
