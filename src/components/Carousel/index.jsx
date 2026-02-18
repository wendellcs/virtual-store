import { Splide, SplideSlide } from '@splidejs/react-splide';
import Card from '../Card';

export default function Carousel({products}){
    console.log(products)
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
            {products && products.map(p => {
                return (
                    <SplideSlide key={p._id} className="slide">
                        <Card className='carousel-card' product={p}/>
                    </SplideSlide>
                )
            })}
        </Splide>
    )
}