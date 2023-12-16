import { ref } from "vue";
// import { auth } from "../firebase/index";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const error = ref(null);

const login = async (email, password) => {
  error.value = null;
  try {
    const res = await signInWithEmailAndPassword(getAuth(), email, password);
    // console.log(res);
    error.value = null;
  } catch (err) {
    error.value = "Incorrect login credentials";
    console.log(error.value);
  }
};

const useLogin = () => {
  return { error, login };
};

export default useLogin;
