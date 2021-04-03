import React from 'react';
import Carousel from 'react-bootstrap/Carousel';


const Products = () =>{
    return (
        <section id="products" className="section section-products">
           
           <div className="products-content">


            <Carousel className="products-content-cards">
                    <Carousel.Item>
                        <Carousel.Caption>
                            <h3>Sed ut perspiciatis 1</h3>
                            <h2>Nemo Enim</h2>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                       
                        <Carousel.Caption>
                            <h3>Sed ut perspiciatis 2</h3>
                            <h2>Nemo Enim</h2>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        
                        <Carousel.Caption>
                            <h3>Sed ut perspiciatis 3</h3>
                            <h2>Nemo Enim</h2>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                        </Carousel.Caption>
                    </Carousel.Item>      
            </Carousel>
           </div>



        </section>
    )
}



export default Products;