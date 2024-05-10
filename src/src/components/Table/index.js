import { useEffect, useState } from 'react'
import Styles from '../Table/table.module.css'
import { GiDeadlyStrike, GiTrashCan }  from 'react-icons/gi'
import { GiPencil } from 'react-icons/gi'
import { json } from 'react-router-dom'
import ModalUpdade from '../Modalupdate'

const Table = ()=> {

    const [carregando, setCarregando] =useState(true)
    const [dados, setDados] = useState([])
    
    
    useEffect(
        ()=>{
            fetch("http://200.150.197.164:3000/produtos/1/10")
            .then((resp)=> resp.json())
            .then((json)=> setDados(json.produtos))
            
            .catch(()=>(alert("Erro ao carregar lista de produtos")))
            .finally(()=> setCarregando(false))
            console.log(dados)
        },[carregando, dados.length]

        )
        
    
        
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
                            <td style={{width: '450px'}}>{dados.descricao}</td>
                            <td>R${dados.custo}</td>
                            <td>R${dados.valor}</td>
                            <td>{dados.estoque}</td>
                            <td className={Styles.tdbutton} style={{border: 'none'}}>
                            <button className={Styles.buttoneditar}>
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