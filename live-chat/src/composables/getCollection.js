import { ref, watchEffect } from "vue";
import { collection, getFirestore, onSnapshot, orderBy, query } from "firebase/firestore";

const getCollection = (_collection) => {
  const documents = ref(null);
  const error = ref(null);

  let collectionRef = collection(getFirestore(), _collection);
  const q = query(collectionRef, orderBy("createdAt", "asc"));
  const unSub = onSnapshot(
    q,
    (snap) => {
      let results = [];
      // console.log("snap");
      snap.docs.forEach((doc) => {
        doc.data().createdAt && results.push({ ...doc.data(), id: doc.id });
      });
      documents.value = results;
      error.value = null;
      // console.log(documents.value);
    },
    (err) => {
      error.value = "cound not fetch data ";
      console.log(err.message);
      documents.value = null;
    }
  );

  watchEffect((onInvalidate) => {
    onInvalidate(() => unSub());
  });

  return { error, documents };
};

export default getCollection;
