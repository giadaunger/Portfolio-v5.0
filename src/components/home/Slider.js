import React from 'react';
import { Slide } from 'react-slideshow-image';
import {
    Container,
    Heading,
  } from '@chakra-ui/react';
import 'react-slideshow-image/dist/styles.css'

import C1 from '../IMG/C1.png';
import C2 from '../IMG/C2.png';
import C3 from '../IMG/C3.png';
import C4 from '../IMG/C4.png';
import C5 from '../IMG/C5.png';
import C6 from '../IMG/C6.png';

const images = [ C1, C2, C3, C4, C5, C6 ];

const Slideshow = () => {
    return (
        <Container mb='100px'>
            <Heading textAlign='center' color='#ff5277' borderBottom='2px #ff5277 solid' m='0px auto 20px auto' width='200px'>Certificates</Heading>
            <Slide>
                {
                images.map((each, index) => <img key={index} alt='slideIMG' style={{width: '100%'}} src={each} />)
                }
            </Slide>
        </Container>
    )
}

export default Slideshow;