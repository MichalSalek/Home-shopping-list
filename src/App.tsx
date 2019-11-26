import React from 'react';
import { EnterNewProduct } from './organisms/enter-new-product';
import { ListAllProducts } from './organisms/list-all-products';

const App: React.FC = () => {
  return (
    <main className="boilerplate-container">
      <EnterNewProduct />
      <ListAllProducts />
    </main>
  );
};

export default App;
