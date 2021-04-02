import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Products = () =>{
    return (
        <section id="products" className="section section-products">
           
            <Carousel className="products-content">
                <div className="products-content-cards">
                    <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=First slidebg=373940"
                        alt="First slide"
                    />
                        <Carousel.Caption>
                            <h3>Sed ut perspiciatis</h3>
                            <h2>Nemo Enim</h2>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=Second slidebg=282c34"
                        alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3>Sed ut perspiciatis</h3>
                            <h2>Nemo Enim</h2>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=Second slidebg=282c34"
                        alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3>Sed ut perspiciatis</h3>
                            <h2>Nemo Enim</h2>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </div>
            </Carousel>
           
        </section>
    )
}



export default Products;