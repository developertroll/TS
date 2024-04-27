import { db } from "@/firebase";
import Product from "@/type/Product";
import {
  getDocs,
  collection,
  orderBy,
  limit,
  query,
  startAfter,
} from "firebase/firestore";

export async function callProduct(lastDoc: number | 0) {
  const productCollection = collection(db, "product");
  const q = query(
    productCollection,
    orderBy("date", "desc"),
    startAfter(lastDoc),
    limit(5)
  );
  const productSnapshot = await getDocs(q);
  const products: Product[] = [];
  productSnapshot.forEach((doc) => {
    products.push(doc.data() as Product);
  });
  return products;
}
