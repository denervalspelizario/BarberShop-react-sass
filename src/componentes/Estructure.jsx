import React from 'react';
import '../styles/componentes/Estructure.sass';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import image4 from '../../public/img/image1.jpg';
import image5 from '../../public/img/image2.jpg';
import image6 from '../../public/img/image3.jpg';
import image7 from '../../public/img/image4.jpg';
import image8 from '../../public/img/image5.jpg';
import image9 from '../../public/img/image6.jpg';
import image10 from '../../public/img/image7.jpg';
import image11 from '../../public/img/image8.jpg';


const images = [image4, image5, image6, image7, image8, image9, image10, image11]


function Estructure()  {
    const carousel = useRef();
    const [ width, setWidth ] = useState(0)
  
    useEffect (() => {
      console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth)
      setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
    }, [])
  
  
  return (
    <section className='estrutura__container' id='estrutura'>
        <div className='estrutura__text'>
            <h3>Estrutura </h3>
            <p>
                Inspirada nas antigas barbearias nova-iorquinas típicas as décadas de 40, 50 e 60, a Barbearia Corleone chega com a intenção de resgatar a cultura masculina,
                perdida ao longo dos anos, em que os homens se encontravam para fazer a barba à navalha e cortar os cabelos enquanto fumavam seus charutos, bebiam e conversavam.
            </p>
            <p>
                Entre toalhas quentes e massagem facial, os melhores cremes e espumas preparam o rosto dos nossos clientes. 
                E hoje, eles e nossos visitantes ainda podem aproveitar o espaço da nossa cervejaria.
            </p>
        </div>
        <div className='carousel__container'>
            <motion.div  ref={carousel}  className='carousel' whileTap={{ cursor: 'grabbing' }} >
                <motion.div className="inner" drag='x' dragConstraints={{ right: 0, left: -width }} initial={{x: 100}} animate={{x: 0}} transition={{ duration: 0.8}}>


                {images.map(image => (

                    <motion.div  className='item' key={image}>
                    <img src={image}  alt="" />
                    </motion.div>
                ))}
          
                </motion.div>
            </motion.div> 
        </div>
    </section>
  )
}

export default Estructure;