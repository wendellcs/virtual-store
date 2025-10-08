import Header from "../../components/Header"

export default function Home() {
    return (
        <>
            <Header/>

            <main>  
                <h1 className="title main">Bem-vindo à Compra Fácil Digital</h1>

                <p className="title subtitle">Encontre tudo o que você precisa com os melhores preços</p>
            
                <section className="products">
                    {/* Carregar cada card */}
                </section>
            </main>
        </>
    )
}