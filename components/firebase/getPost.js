import {
  addDoc,
  collection,
  deleteDoc,
  // doc,
  getDocs,
  // updateDoc,
} from "firebase/firestore";
import { db } from "../../config/firebase-config";

export async function PostingData(collectioName, obj) {
  const ref = collection(db, collectioName);
  await addDoc(ref, obj);
}
// export const GettingData = async (colName, setData, ok, setMsgId) => {
//   const ref = collection(db, colName);

//   //   setLoading(true);
//   try {
//     const data = await getDocs(ref);
//     const fileteredData = data.docs.map((doc) => doc.data());
//     const val = fileteredData[0]?.dataToUpdate;
//     if (fileteredData.length === 0 || val === undefined) {
//       return;
//     }
//     setData(val);
//     if (ok) {
//       setMsgId(val[val.length - 1].id);
//     }
//   } catch (err) {
//     console.error(err);
//     // setLoading(false);
//   }
// };
// export async function updateMyDocument(dataToUpdate) {
//   const ref = doc(db, "chatbox", "grb8fpjYC6gpYCcJJDnC");

//   try {
//     // Update the document; if it doesn't exist, it will be created
//     await updateDoc(ref, { dataToUpdate });
//     // console.log("Document updated or created successfully!");
//   } catch (error) {
//     console.error("Error updating document: ", error);
//   }
// }
export async function emptyMyDocument() {
  const querySnapshot = await getDocs(collection(db, "chatbox"));
  querySnapshot.forEach(async (doc) => {
    try {
      await deleteDoc(doc.ref);
      // console.log("Document deleted successfully:", doc.id);
    } catch (error) {
      console.error("Error deleting document:", doc.id, error);
    }
  });
}
