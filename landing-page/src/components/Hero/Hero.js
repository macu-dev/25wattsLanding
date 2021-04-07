import React from 'react';
import { Carousel, Button } from "react-bootstrap";
import imageSlide from "../../assets/img/slider-1@2x.png";

const Hero = () => {

  const sliders = [
    {
      title: 'Sed ut perspiciatis unde omnis iste natus',
      content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.',
      buttons: 'Read More',
      alt: 'First slide'
    },
    {
      title: 'Sed ut perspiciatis unde omnis iste natus2',
      content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.',
      buttons: 'Read More 2',
      alt: 'Second slide'
    },
    {
      title: 'Sed ut perspiciatis unde omnis iste natus3',
      content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.',
      buttons: 'Read More 3',
      alt: 'Third slide'
    },
  ] 

  return (
    <section className='hero'>

        <Carousel controls={false}>
            {
                sliders.map(({title, content, buttons, alt}) => 
                    <Carousel.Item key={alt}>
                        <img src={imageSlide} className='d-block w-100' alt={alt} />
                        <Carousel.Caption>
                            <h3>{title}</h3>
                            <p>{content}</p>
                            <Button variant='primary'>{buttons}</Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                )
            }
        </Carousel>
    </section>
  );
}

export default Hero;