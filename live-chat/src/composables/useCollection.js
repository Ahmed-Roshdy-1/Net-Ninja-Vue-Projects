import { ref } from "vue";
import { collection, addDoc, getFirestore } from "firebase/firestore";

const useCollection = (_collection) => {
  const error = ref(null);

  const docRef = collection(getFirestore(), _collection);

  const addDoc2 = async (doc) => {
    error.value = null;

    try {
      await addDoc(docRef, doc);
    } catch (err) {
      console.log(err.message);
      error.value = "could not send the message";
    }
  };

  return { error, addDoc2 };
};

export default useCollection;
