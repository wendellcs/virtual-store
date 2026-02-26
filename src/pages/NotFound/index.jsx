import { Link } from "react-router-dom";
import logo from '../../assets/images/logo.png'
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function NotFound(){
    return (
        <div className="page-notFound">
            <Header/>
            <main>

                <h1 className="title">Compra Fácil</h1>
                <h2>Essa página não existe.</h2>

                <Link to={'/'}>Clique aqui para ir à página principal</Link>

                <img src={logo} alt="Logo Compra Fácil By" />

            </main>
            <Footer/>
        </div>
    )
}