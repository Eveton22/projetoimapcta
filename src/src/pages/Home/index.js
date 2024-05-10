import { Link } from "react-router-dom";
import Styles from '../Home/Home.module.css'
const Home = ()=> {
    return(
        <div className={Styles.container}>
            <div>
                <h1> PROJETO  DE ERP PARA EMPRESAS</h1>
                <h3>SIMULAMOS UMA AUTOPEÇAS</h3>
                <button>
                    <Link to='/cadastro'>PAGINA</Link>
                </button>
            </div>
        </div>
    )
}

export default Home;