import { addDoc, collection, deleteDoc, doc, getDoc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from "../config/firebaseConfig";
import { uploadImageToCloudinary } from "../config/cloundinaryConfig";

export const addDocument = async (collectionName, values) => {
  try {
    // 🔥 nếu có nhiều ảnh
    if (values.listImg && values.listImg.length > 0) {
      const uploadedImages = await Promise.all(
        values.listImg.map((file) =>
          uploadImageToCloudinary(file, collectionName)
        )
      );

      values.listImg = uploadedImages; // array URL
    }

    // 👉 nếu vẫn có imgUrl (1 ảnh)
    if (values.imgUrl) {
      const imgUrl = await uploadImageToCloudinary(
        values.imgUrl,
        collectionName
      );
      values.imgUrl = imgUrl;
    }

    // thêm document
    const docRef = await addDoc(collection(db, collectionName), values);

    const addedDoc = await getDoc(doc(db, collectionName, docRef.id));

    return { id: docRef.id, ...addedDoc.data() };
  } catch (error) {
    console.error("Error adding document:", error);
    throw error;
  }
};

export const fetchDocumentsRealtime = (collectionName, callback) => {
  const collectionRef = collection(db, collectionName);

  // Lắng nghe dữ liệu thay đổi trong thời gian thực
  const unsubscribe = onSnapshot(collectionRef, (querySnapshot) => {
    const documents = [];
    querySnapshot.forEach((doc) => {
      documents.push({ id: doc.id, ...doc.data() });
    });

    // Gọi callback với dữ liệu mới nhất
    callback(documents);
  });

  // Hàm trả về unsubscribe để có thể dừng lắng nghe khi không cần nữa
  return unsubscribe;
};

export const updateDocument = async (collectionName, values) => {
   // Tách id ra khỏi newValues
   const { id, ...updatedValues } = values;
 
  await updateDoc(doc(collection(db, collectionName), values.id), updatedValues);
};

export const deleteDocument = async (collectionName, values) => {
// Xóa tài liệu khỏi Firestore
await deleteDoc(doc(collection(db, collectionName), values.id));
};