import React from 'react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import {
    Container,
    Text,
    Heading,
    Link,
    Box,
    Circle,
    Button
  } from '@chakra-ui/react';

function Projects() {

    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return(
        <Container>
            <Heading textAlign='center' color='black' borderBottom='2px black solid' m='0px auto 20px auto' width='200px'>My projects</Heading>
            <Text mb='70px' color='black'>
                These are a few of my projects. If you'd like to see more, <Link href='https://github.com/giadaunger?tab=repositories' isExternal>click here to see my GitHub <ExternalLinkIcon mx='2px' /></Link> 
            </Text>

            <Box mb='50px'>
                <Heading color='black'>Project 1</Heading>
                <Circle size='150px' bg='blackAlpha.300' mb='40px'></Circle>
                <Text width='80%' color='black'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</Text>
                <Button mt='10px' color='black' colorScheme='black' variant='outline' _hover={{color: "#baa898"}} onClick={() => openInNewTab('https://github.com/giadaunger?tab=repositories')} >Github repo</Button>
            </Box>

            <Box mb='50px'>
                <Heading color='black' textAlign='right'>Project 2</Heading>
                <Circle size='150px' bg='blackAlpha.300' mb='40px' ml='auto'></Circle>
                <Text width='80%' ml='auto' color='black' textAlign='right'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</Text>
                <Button mt='10px' color='black' colorScheme='black' float='right' variant='outline' _hover={{color: "#baa898"}} onClick={() => openInNewTab('https://github.com/giadaunger?tab=repositories')} >Github repo</Button>
            </Box>

            <Box mb='50px'>
                <Heading color='black'>Project 3</Heading>
                <Circle size='150px' bg='blackAlpha.300' mb='40px'></Circle>
                <Text width='80%' color='black'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</Text>
                <Button mt='10px' color='black' colorScheme='black' variant='outline' _hover={{color: "#baa898"}} onClick={() => openInNewTab('https://github.com/giadaunger?tab=repositories')} >Github repo</Button>
            </Box>

            <Box mb='50px'>
                <Heading color='black' textAlign='right'>Project 4</Heading>
                <Circle size='150px' bg='blackAlpha.300' mb='40px' ml='auto'></Circle>
                <Text width='80%' ml='auto' color='black' textAlign='right'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</Text>
                <Button mt='10px' color='black' colorScheme='black' float='right' variant='outline' _hover={{color: "#baa898"}} onClick={() => openInNewTab('https://github.com/giadaunger?tab=repositories')} >Github repo</Button>
            </Box>
        </Container>
    );
}

export default Projects;