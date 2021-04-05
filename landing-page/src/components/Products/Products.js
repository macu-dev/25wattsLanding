import React from 'react';
import Carousel from 'react-bootstrap/Carousel';


const Products = () =>{


    return (
        <section id="products" className="section section-products">
           
           <div className="products-content">
            <Carousel className="products-content-cards" indicators={false}>
                    <Carousel.Item className="pl-5 pr-5">
                        <Carousel.Caption className="d-contents">
                            <h3 className="carosuel-caption__title m-0 pb-0">Sed ut perspiciatis 1</h3>
                            <h2 className="carosuel-caption__subtitle m-0 pb-0">Nemo Enim</h2>
                            <p className="carosuel-caption__text" >Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="pl-5 pr-5">
                       
                        <Carousel.Caption className="d-contents">
                            <h3 className="carosuel-caption__title m-0 pb-0">Sed ut perspiciatis 2</h3>
                            <h2 className="carosuel-caption__subtitle m-0 pt-0">Nemo Enim</h2>
                            <p className="carosuel-caption__text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="pl-5 pr-5">
                        
                        <Carousel.Caption className="d-contents">
                            <h3 className="carosuel-caption__title m-0 pb-0">Sed ut perspiciatis 3</h3>
                            <h2 className="carosuel-caption__subtitle m-0 pt-0">Nemo Enim</h2>
                            <p className="carosuel-caption__text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                        </Carousel.Caption>
                    </Carousel.Item>      
            </Carousel>
           </div>



        </section>
    )
}



export default Products;