import * as React from 'react';
import * as firebase from 'firebase';

import { readProducts } from '../common/firebase.service';
import { ProductModel } from '../common/Product.model';
// Material
import { Container } from '@material-ui/core';

export const ListAllProducts = () => {
  const [products, setProducts] = React.useState<ProductModel[]>([]);

  React.useEffect((): void => {
    readProducts().on(
      'value',
      async (res: firebase.database.DataSnapshot) => {
        const rawData = await res.val();
        const preparedData: React.SetStateAction<ProductModel[]> = [];
        Object.keys(rawData).map(el => {
          preparedData.push(rawData[el]);
        });
        setProducts(preparedData);
      },
    );
  }, []);

  return (
    <Container fixed>
      <ol>
        {products.map((el: ProductModel, i: number) => (
          <li key={i}>
            {' '}
            {el.name}, kupione? {String(el.isBuyed)}{' '}
          </li>
        ))}
      </ol>
    </Container>
  );
};
