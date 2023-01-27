import React from 'react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import {
    Container,
    Text,
    Heading,
    Link,
    Box,
    Button,
    Image
  } from '@chakra-ui/react';

import P1 from './IMG/P1.png';
import P2 from './IMG/P2.png';
import P3 from './IMG/P3.png';
import P4 from './IMG/P4.png';


function Projects() {

    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return(
        <Container>
            <Heading textAlign='center' color='#ff5277' borderBottom='2px #ff5277 solid' m='0px auto 20px auto' width='200px'>My projects</Heading>
            <Text mb='70px' color='#ADA7AD' fontSize='lg' textAlign='center'>
                These are a few of my projects which I enjoyed building the most. <Link href='https://github.com/giadaunger?tab=repositories' isExternal>Click here to see my GitHub<ExternalLinkIcon mx='2px' /></Link> and the rest of my projects.
            </Text>

            <Box mb='100px'>
                <Heading color='#ff5277' textAlign='center'>Todo List - React</Heading>
                <Image alt='project picture' src={P4} objectFit='cover' />
                <Text width='80%' color='#ADA7AD' m='10px auto 0px auto' textAlign='center'>This was the first project I build using React. It is a simple todo list, where you can add and delete todos. You can also mark your todos as completed.</Text>
                
                <Container display='flex' justifyContent='center'>
                <Button m='20px 10px 0px 0px' color='#ADA7AD' colorScheme='#ADA7AD' variant='outline' _hover={{color: '#ff5277'}} onClick={() => openInNewTab('https://github.com/giadaunger/React-Todo')} >Github repo</Button>
                <Button m='20px 10px 0px 0px' color='#ADA7AD' colorScheme='#ADA7AD' variant='outline' _hover={{color: '#ff5277'}} onClick={() => openInNewTab('https://epic-mirzakhani-4d76b1.netlify.app/')} >View project</Button>
                </Container>
            </Box>

            <Box mb='100px'>
                <Heading color='#ff5277' textAlign='center'>The Cereal Factory</Heading>
                <Image alt='project picture' src={P3} objectFit='cover' />
                <Text width='80%' color='#ADA7AD' m='10px auto 0px auto' textAlign='center'>This was the first I tried to build a webshop with a functional shoppingcart. All the items and info about the items are stored as objects in a JS-file, and the frontend is built with React.</Text>
                
                <Container display='flex' justifyContent='center'>
                <Button m='20px 10px 0px 0px' color='#ADA7AD' colorScheme='#ADA7AD' variant='outline' _hover={{color: '#ff5277'}} onClick={() => openInNewTab('https://github.com/giadaunger/ShoppingCart')} >Github repo</Button>
                <Button m='20px 10px 0px 0px' color='#ADA7AD' colorScheme='#ADA7AD' variant='outline' _hover={{color: '#ff5277'}} onClick={() => openInNewTab('https://zippy-gaufre-01fcf9.netlify.app/')} >View project</Button>
                </Container>
            </Box>


            <Box mb='100px'>
                <Heading color='#ff5277' textAlign='center'>Dinosour Game</Heading>
                <Image alt='project picture' src={P2} objectFit='cover' />
                <Text width='80%' color='#ADA7AD' m='10px auto 0px auto' textAlign='center'>This is a simple game build with Vanilla JS. The pourpes of this game is to tap on the space bar to make the dinosaur jump over the object, in this case a rock. When you touch the rock you lose.</Text>
                
                <Container display='flex' justifyContent='center'>
                <Button m='20px 10px 0px 0px' color='#ADA7AD' colorScheme='#ADA7AD' variant='outline' _hover={{color: '#ff5277'}} onClick={() => openInNewTab('https://github.com/giadaunger/DinosaurGame')} >Github repo</Button>
                <Button m='20px 10px 0px 0px' color='#ADA7AD' colorScheme='#ADA7AD' variant='outline' _hover={{color: '#ff5277'}} onClick={() => openInNewTab('https://stately-llama-2a3330.netlify.app/')} >View project</Button>
                </Container>
            </Box>

            <Box mb='100px'>
                <Heading color='#ff5277' textAlign='center'>Portfolio v.1</Heading>
                <Image alt='project picture' src={P1} objectFit='cover' />
                <Text width='80%' color='#ADA7AD' m='10px auto 0px auto' textAlign='center'>This was the very first portfolio I built using HTML and CSS. Very simple design and structure.</Text>
                
                <Container display='flex' justifyContent='center'>
                <Button m='20px 10px 0px 0px' color='#ADA7AD' colorScheme='#ADA7AD' variant='outline' _hover={{color: '#ff5277'}} onClick={() => openInNewTab('https://github.com/giadaunger/myFirstPortfolio')} >Github repo</Button>
                <Button m='20px 10px 0px 0px' color='#ADA7AD' colorScheme='#ADA7AD' variant='outline' _hover={{color: '#ff5277'}} onClick={() => openInNewTab('https://fluffy-mooncake-a74051.netlify.app/')} >View project</Button>
                </Container>
            </Box>

        </Container>
    );
}

export default Projects;