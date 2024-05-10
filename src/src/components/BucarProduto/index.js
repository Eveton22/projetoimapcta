import React, { useState } from "react";
import styles from '../BucarProduto/buscarProduto.module.css'
import Table from '../TableBuscar/index.js'


const BuscarProduto = () => {
    const [values, setValues] = useState({})
    const [dados, setDados] = useState([]);
    const [dadosCarregados, setDadosCarregados] = useState([])
    const [campo, setCampo] = useState('none')
    const [resultado, setResultado] = useState('none')

    const handleChangeValues = (event) => {
        const { name, value } = event.target;
        setValues(prevValues => ({
            ...prevValues,
            [name]: value
        }));
    };

    
    //http://200.150.197.164:3000/produto/id_produto
    const handleClickButton = (event)=>{
        event.preventDefault();
            
            try{
                if(values.id == null & values.descricao == null){
                    setCampo('block')
                }
                if(values.id){
                    fetch(`http://200.150.197.164:3000/produto/${values.id}`)
                    .then((resp) => resp.json())
                    .then((json)=> setDados([json['produto']]))
                    .catch((e)=>(setCampo('none')))
                    
                    
                    setDadosCarregados(dados)
                    setCampo('none')
                } 
                if(values.descricao){
                    fetch(`http://200.150.197.164:3000/produto/${values.descricao}/1/10`)
                    .then((resp)=> resp.json())
                    .then((json)=> setDados(json.produtos))
                    .catch(()=>(setCampo('none')))
                    
                    if([undefined]){
                        setResultado('none')
                    } else {
                        setResultado('none')
                    }
                     setDadosCarregados(dados)
                }


            } catch(e){
                alert(e);
            }


    }


    return (
        <div className={styles.containerprincipal}>
            <div className={styles.containerForm}>
                <h1>BUSCAR PRODUTOS</h1>
                <form>
                    <div className={styles.container}>
                    <div className={styles.inputscodigo}>
                            <label>codigo:</label><br />
                            <input  type="number" name="id" onChange={handleChangeValues} placeholder="codigo" />
                        </div>
                        <div className={styles.inputsdescricao}>
                            <label>Descrição:</label><br />
                            <input  type="text" name="descricao" onChange={handleChangeValues} placeholder="Descrição" />
                        </div>
                        <div className={styles.cadastrar}>
                            <button onClick={handleClickButton}>BUSCAR</button>
                        </div>
                    </div>
                </form>
                {<h5 style={{color: 'red', display: `${resultado}`, position: "absolute", fontSize: '17px', right:'680px'}}>Item nao encotrado</h5>}
                {<h5 style={{color: 'red', display: `${campo}`, position: "relative"}}>PREENCHA OS CAMPOS</h5>}
            </div>
            <div style={{textAlign: 'center', padding: '20px'}}>
                    <h1 style={{ padding: '20px'}}>PRODUTOS ENCONTRADOS</h1>
                    <Table dados={dadosCarregados}/>
            </div>
        </div>
    )
}

export default BuscarProduto;
