import React, {useState} from 'react';

import {OwnInput} from "../atoms/own-input";
import {OwnButton} from "../atoms/own-button";
// Material
import {Container} from "@material-ui/core";

export const EnterNewProduct = () => {
    const [newProduct, setNewProduct] = useState("");

    const addNewProduct = (): void => {
        const value = newProduct;
        setNewProduct("")
    };

    return (
        <Container fixed>
            <OwnInput id="enter-new-product" label="Czego brakuje?" setter={setNewProduct} value={newProduct}/>
            <OwnButton clicker={addNewProduct} textContent="Dodaj produkt" loading={true} />
        </Container>
    )
};
