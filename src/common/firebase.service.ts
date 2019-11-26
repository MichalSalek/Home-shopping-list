import initializationDB from './firebase.init';
import * as firebase from 'firebase';

const db = initializationDB();

export const writeNewProduct = (product: string) => {
  if (!product) return null;
  db.ref('products/' + product).set({
    name: product,
    isBuyed: false,
  });
};

export const readProducts = (): firebase.database.Reference => {
  return db.ref('products/');
};
