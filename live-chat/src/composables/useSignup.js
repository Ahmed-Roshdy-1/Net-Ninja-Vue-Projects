import { ref } from "vue";
import auth from "../firebase";

import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

const error = ref(null);

const signup = async (email, password, displayName) => {
  error.value = null;

  try {
    const res = await createUserWithEmailAndPassword(getAuth(), email, password);
    if (!res) {
      throw new Error("Could not complete the signup");
    }
    await updateProfile(res.user, { displayName });
    // console.log(res.user);
    error.value = null;
    return res;
  } catch (err) {
    error.value = err.message;
    console.log(error.value);
  }
};

const useSignup = () => {
  return { error, signup };
};

export default useSignup;
