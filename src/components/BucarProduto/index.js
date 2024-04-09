import React, { useState } from "react";
import styles from '../BucarProduto/buscarProduto.module.css'
import Table from '../TableBuscar/index.js'


const BuscarProduto = () => {
    const [values, setValues] = useState({

    });

    const handleChangeValues = (event) => {
        const { name, value } = event.target;
        setValues(prevValues => ({
            ...prevValues,
            [name]: value
        }));
    };



    return (
        <div className={styles.containerprincipal}>
            <div className={styles.containerForm}>
                <h1>BUSCAR PRODUTOS</h1>
                <form>
                    <div className={styles.container}>
                        <div className={styles.inputscodigo}>
                            <label>Codigo:</label><br />
                            <input type="number" name="codigo" onChange={handleChangeValues} placeholder="codigo" />
                        </div>
                        <div className={styles.inputsdescricao}>
                            <label>Descrição:</label><br />
                            <input  type="text" name="descricao" onChange={handleChangeValues} placeholder="Descrição" />
                        </div>
                        <div className={styles.cadastrar}>
                            <button>BUSCAR</button>
                        </div>
                    </div>
                </form>
            </div>
            <div style={{textAlign: 'center', padding: '20px'}}>
                    <h1 style={{ padding: '20px'}}>PRODUTOS ENCONTRADOS</h1>
                    <Table codigo={values.codigo} descricao={values.descricao}/>
            </div>
        </div>
    )
}

export default BuscarProduto;
