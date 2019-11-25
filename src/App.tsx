import React from 'react';
import './App.css';

import {EnterNewProduct} from "./components/enter-new-product";

const App: React.FC = () => {
    return (
        <main className='boilerplate-container'>
            <EnterNewProduct/>
        </main>
    );
};

export default App;
