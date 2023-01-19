import React from 'react';
import Resume from '../IMG/Giada Unger Resume.pdf'
import Skills from './Skills';
import AboutMe from './AboutMe';
import FPimg from '../IMG/FPimg.png'

import { FaFileUpload } from 'react-icons/fa';
import {
    Button,
    Heading,
    Image,
    Flex,
    Container
  } from '@chakra-ui/react';

function Home() {

    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <Container>
            <Heading textAlign='center' size='3xl' m='40px 0px 20px 0px' color='black'>Giada Unger</Heading>
            <Heading textAlign='center' size='md' mb='40px' color='black'>Frontend / App Developer</Heading>

            <Image alt='logo' src={FPimg} boxSize='350px' objectFit='cover' m='0px auto 0px auto' />
            <Flex>
                <Button color='black' colorScheme='black' variant='outline' _hover={{color: "#baa898"}} onClick={() => openInNewTab(Resume)} rightIcon={<FaFileUpload />} m='0px auto 100px auto'>Downlad my resume</Button> 
            </Flex>

            <AboutMe />
            <Skills />
        </Container>
    );
}

export default Home;