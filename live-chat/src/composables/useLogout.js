import { ref } from "vue";
// import { auth } from "../firebase/index";

import { getAuth, signOut } from "firebase/auth";

const error = ref(null);

const logout = async () => {
  error.value = null;
  try {
    await signOut(getAuth());
  } catch (err) {
    error.value = err.message;
    console.log(error.value);
  }
};

const useLogout = () => {
  return { logout, error };
};

export default useLogout;
