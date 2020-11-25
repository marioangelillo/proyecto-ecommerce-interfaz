import React from 'react';
import ProductCard from './ProductCard';
import { Container} from 'react-bootstrap';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function ProductosDestacados({productos}) {

    const options = {
        margin: 30,
        responsiveClass: true,
        nav: true,
        dots: false,
        autoplay: false,        
        //navText: ["Prev", "Next"],
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1,
            },
            600: {
                items: 2,
            },
            700: {
                items: 3,
            },
            1000: {
                items: 4,
    
            }
        },
    };
    return (
        <Container fluid>
            <h1 className="mt-5 text-center">Productos Destacados</h1>
            <hr className="w-75" />
            <OwlCarousel
                className="owl-theme"
                loop
                margin={10}
                nav
                {...options}                
            >
                {productos.map(prod =>{
                    return(
                        <ProductCard prod={prod} />
                        
                    )
                })}
                
            </OwlCarousel>
        </Container>
    )
}
