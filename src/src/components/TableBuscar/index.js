
import Styles from '../TableBuscar/table.module.css'
import { GiDeadlyStrike, GiTrashCan }  from 'react-icons/gi'
import { GiPencil } from 'react-icons/gi'
import { json } from 'react-router-dom'
import ModalUpdade from '../Modalupdate'
import { useState } from 'react'
import axios from 'axios'
const Table = ({dados})=> {   

    const [campo, setCampo] = useState('none')
    const [valueitem, SetValueItem] =  useState()

    const updateModalButton = (event)=> {
        setCampo('block')


    }

    const updateItems = ()=> { 
        axios.put("")
    }
    
    const cancel = (event)=> {
        event.preventDefault();
        setCampo('none')
    }

    console.log(dados)
        
        return(
            <div className={Styles.container}>
            <table>
                <thead>
                    <tr className={Styles.containerCategorias}>
                        <th>CODIGO</th>
                        <th>DESCRICAO</th>
                        <th>CUSTO</th>
                        <th>VALOR</th>
                        <th>ESTOQUE</th>
                        <th>EDITAR</th>
                        <th>EXCLUIR</th>
                    </tr>
                </thead>
                <tbody className={Styles.containerDados}>
                    
                    {dados.map((dados=> (
                        <tr>
                            <td>{dados.id}</td>
                <div style={{display: `${campo}`, textAlign: 'center',position: 'absolute', background: 'white', width: '530px', height: '230px', borderRadius: '11px', border: '3px solid red', translate: '2s' }}>
                    <form className={Styles.formmodal}>
                        <div style={{margin: '5px', paddingTop: '11px'}}>
                            <label>Codigo:</label>
                            <input type='number' value={dados.id}/><br />
                        </div>
                        <div style={{margin: '5px'}}>
                            <label>Descricao:</label>
                            <input type='texte' value={dados.descricao} onClick={updateItems}/><br />
                        </div>
                        <div style={{margin: '5px'}}>
                            <label>Custo:</label>
                            <input type='number'value={dados.custo}/><br />
                        </div>
                        <div style={{margin: '5px'}}>
                            <label>Valor:</label>
                            <input type='number' value={dados.valor}/><br />
                        </div>
                        <div style={{margin: '5px'}}>
                            <label>Estoque:</label>
                            <input type='number'value={dados.estoque}/><br />
                        </div>
                        <button style={{margin: '6px', cursor: 'pointer', padding: '8px 20px', fontFamily: 'arial'}}>Atualizar</button>
                        <button style={{margin: '6px', cursor: 'pointer', padding: '8px 20px', fontFamily: 'arial'}} onClick={cancel}>Cancelar</button>
                    </form>
                </div>
                            <td style={{width: '450px'}}>{dados.descricao}</td>
                            <td>R${dados.custo}</td>
                            <td>R${dados.valor}</td>
                            <td>{dados.estoque}</td>
                            <td className={Styles.tdbutton} style={{border: 'none'}}>
                            <button className={Styles.buttoneditar} onClick={updateModalButton}>
                                EDITAR
                                <GiPencil size={20} />    
                            </button>
                        </td>
                        <td className={Styles.tdbutton} style={{border: 'none'}}>
                            <button className={Styles.buttonlixo}  >    
                                EXCLUIR
                                <GiTrashCan size={20}  />
                            </button>
                        </td>
                        </tr>
                        
                    )))}    
                </tbody>
            </table>
        </div>
    )
}

export default Table;