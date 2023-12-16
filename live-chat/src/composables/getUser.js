import { ref } from "vue";
// import { auth } from "../firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const user = ref(getAuth().currentUser);

onAuthStateChanged(getAuth(), (_user) => {
  // console.log("user state change is: ", _user);
  user.value = _user;
});

const getUser = () => {
  return { user };
};

export default getUser;
