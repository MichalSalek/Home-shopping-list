import * as React from 'react';

import { writeNewProduct } from '../common/firebase.service';

import { OwnInput } from '../atoms/own-input';
import { OwnButton } from '../atoms/own-button';
// Material
import { Container } from '@material-ui/core';

export const EnterNewProduct = () => {
  const [newProduct, setNewProduct] = React.useState('');

  const addNewProduct = (): void => {
    const value = newProduct;
    setNewProduct('');
    writeNewProduct(value);
  };

  return (
    <Container fixed>
      <OwnInput
        id="enter-new-product"
        label="Dodaj produkt do kupienia"
        setter={setNewProduct}
        value={newProduct}
      />
      <OwnButton
        clicker={addNewProduct}
        textContent="Dodaj"
        loading={false}
      />
    </Container>
  );
};
