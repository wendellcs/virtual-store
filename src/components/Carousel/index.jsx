import { Splide, SplideSlide } from '@splidejs/react-splide';
import Card from '../Card';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Carousel(){
    const [topProducts, setTopProducts] = useState([])

    useEffect(() => {
        async function getTopProducts() {
            await axios.get('https://compra-facil.onrender.com/products/top_products')
            .then(data => {
                setTopProducts(data.data)
            })
            .catch(e => {
                console.error('Houve um problema ao buscar os produtos.', e)
            })
        }

        getTopProducts()
    }, [])
    
    const splideOptions = {
        autoplay: true,
        rewind: true,
        start: 5,
        speed: 600,
        permove: 1,
        focus: 'center',
        gap: '2rem',
        pagination: true,
        height: "300px",
        flickPower: 20, 
        flickMaxPages: 1,  
    }

    return (
        <Splide options={ splideOptions } className="carousel">
            {topProducts && topProducts.map(p => {
                return (
                    <SplideSlide key={p._id} className="slide">
                        <Card className='carousel-card' product={p}/>
                    </SplideSlide>
                )
            })}
        </Splide>
    )
}