import React, { useState } from "react";
import styles from '../CadastrarProduto/cadastrarProduto.module.css'
import apiClient from "./http-common";
import Table from "../Table";


const CadastroProduto = () => {
    const [values, setValues] = useState({

    });

    const handleChangeValues = (event) => {
        const { name, value } = event.target;
        setValues(prevValues => ({
            ...prevValues,
            [name]: value
        }));
    };



    const handleClickButton = async (event) => {
        event.preventDefault();
        try {
            const response = await apiClient.post("http://200.150.197.164:3000/produto", {
                codigo: parseInt(values.codigo),
                descricao: values.descricao,
                custo: parseFloat(values.custo),
                valor: parseFloat(values.valor),
                estoque: parseInt(values.estoque)
                
            }, {
                headers: {
                  "x-access-token": "token-value",
                },
              });



            console.log(response);
        } catch (error) {
            console.error("Erro:", error);
        }
        
        
            
    };

    return (
        <div className={styles.containerprincipal}>
            <div className={styles.containerForm}>
                <h1>CADASTRAR PRODUTO</h1>
                <form onSubmit={handleClickButton}>
                    <div className={styles.container}>
                        <div className={styles.inputscodigo}>
                            <label>Codigo:</label><br />
                            <input required type="number" name="codigo" value={values.codigo} onChange={handleChangeValues} placeholder="codigo" />
                        </div>
                        <div className={styles.inputsdescricao}>
                            <label>Descrição:</label><br />
                            <input required type="text" name="descricao" value={values.descricao} onChange={handleChangeValues} placeholder="Descrição" />
                        </div>
                        <div className={styles.inputs}>
                            <label>Custo:</label><br />
                            <input type="number" name="custo" value={values.custo} onChange={handleChangeValues} placeholder="Custo" />
                        </div>
                        <div className={styles.inputs}>
                            <label>Valor:</label><br />
                            <input type="number" name="valor" value={values.valor} onChange={handleChangeValues} placeholder="Valor" />
                        </div>
                        <div className={styles.inputs}>
                            <label>Estoque:</label><br />
                            <input type="number" name="estoque" value={values.estoque} onChange={handleChangeValues} placeholder="Estoque" />
                        </div>
                        <div className={styles.cadastrar}>
                            <button type="submit">CADASTRAR</button>
                        </div>
                    </div>
                </form>
            </div>
            <div style={{textAlign: 'center', padding: '20px'}}>
                    <h1 style={{ padding: '20px'}}>ULTIMOS PRODUTOS CADASTRADOS</h1>
                    <Table />
            </div>
        </div>
    )
}

export default CadastroProduto;