import Footer from "../../components/Footer"
import Header from "../../components/Header"
import exampleImg from '../../assets/images/example.png'

export default function About(){
    return (
        <div className="about-container">
            <Header/>

            <main id="about">
                <h2 className="title subtitle">Quem somos?</h2>

                <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ipsa debitis accusantium autem, facilis neque consequuntur voluptatum minus modi perferendis vero. Facere voluptas quia maiores quo possimus, ut eveniet nihil?</p>
                <img src={exampleImg} alt="Imagem de exemplo" />
                <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ipsa debitis accusantium autem, facilis neque consequuntur voluptatum minus modi perferendis vero. Facere voluptas quia maiores quo possimus, ut eveniet nihil?</p>
                <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ipsa debitis accusantium autem, facilis neque consequuntur voluptatum minus modi perferendis vero. Facere voluptas quia maiores quo possimus, ut eveniet nihil?</p>
            </main>

            <Footer/>
        </div>
    )
}