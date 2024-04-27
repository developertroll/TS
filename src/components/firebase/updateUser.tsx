import { serverTimestamp, updateDoc, doc } from "firebase/firestore";
import { db } from "@/firebase";
import User from "@/type/user";

const updateUser = async (uid: string, data: User) => {
  try {
    const docRef = doc(db, `user/${uid}`);
    await updateDoc(docRef, {
      ...data,
      updatedAt: serverTimestamp(),
    });
  } catch (e) {
    console.error("Error updating document: ", e);
  }
};

export { updateUser };
