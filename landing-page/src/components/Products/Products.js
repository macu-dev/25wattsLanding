import React from 'react';
import Carousel from 'react-bootstrap/Carousel';


const Products = () =>{

    const products = [
        {
          title: 'Sed ut Sed ut perspiciatis 1',
        },
        {
            title: 'Sed ut Sed ut perspiciatis 2', 
        },
        {
            title: 'Sed ut Sed ut perspiciatis 3',
        }
    ];

    return (
        <section id="products" className="section section-products">
           
           <div className="products-content">
            <Carousel className="products-content-cards" indicators={false}>
                {
                    products.map(({title}) => 
                        <Carousel.Item className="pl-5 pr-5" key={title}>
                            <Carousel.Caption className="d-contents">
                                <h3 className="carosuel-caption__title m-0 pb-0">{title}</h3>
                                <h2 className="carosuel-caption__subtitle m-0 pb-0">Nemo Enim</h2>
                                <p className="carosuel-caption__text" >
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>  
                    )
                }
            </Carousel>
           </div>
        </section>
    )
}

export default Products;