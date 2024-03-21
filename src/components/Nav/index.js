import { Link } from 'react-router-dom';
import Styles from '../Nav/nav.module.css'
const Nav = ()=> {
    return(
        <div className={Styles.container}>
            <nav>
                <div classNama={Styles.link}>
                    <Link  to='/'>HOME</Link>
                </div>
                <div classNama={Styles.link}>
                    <Link to='/cadastro'>CADASTRAR PRODUTOS</Link>
                </div>
                <div classNama={Styles.link}>
                    <Link to='/estoque'>ESTOQUE</Link>
                </div>
                <div classNama={Styles.link}>
                    <Link   to='/sistema'>COMPRAS</Link>
                </div>
            </nav>
        </div>
    )
}

export default Nav;