import React, { useState } from "react";import Nav from "../../components/Nav";
import CadastroProduto from "../../components/CadastrarProduto";

import styles from '../searchproducts/search.module.css'
import BuscarProduto from "../../components/BucarProduto";


const SearchProduto = () => {
    return (
        <div className={styles.container}>
            <Nav />
            <BuscarProduto />
        </div>
    )
}

export default SearchProduto;