import CadastroProduto from "../../components/CadastrarProduto";
import Nav from "../../components/Nav";
import Styles from '../cadastro/home.module.css'

const Cadastro = ()=> {
    return(
        <div className={Styles.container}>
            <Nav/>
            <CadastroProduto />
        </div>
    )
}

export default Cadastro;