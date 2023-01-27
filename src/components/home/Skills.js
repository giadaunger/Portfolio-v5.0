import React from 'react';
import {
    Grid,
    GridItem,
    Heading,
    Container,
    Text
} from '@chakra-ui/react';

function Skills() {
    return(
        <Container mb='100px'>
            <Heading textAlign='center' color='#ff5277' borderBottom='2px #ff5277 solid' m='0px auto 20px auto' width='220px'>Skills</Heading>
            <Grid templateColumns='repeat(4, 1fr)' gap={6}>
            <GridItem w='100%' h='10' borderRadius='5px' border='1px #ADA7AD solid'>
                <Text color='#ADA7AD' textAlign='center' mt='8px'>HTML</Text>
            </GridItem>
            <GridItem w='100%' h='10'borderRadius='5px' border='1px #ADA7AD solid'>
                <Text color='#ADA7AD' textAlign='center' mt='8px'>CSS</Text>
            </GridItem>
            <GridItem w='100%' h='10' borderRadius='5px' border='1px #ADA7AD solid'>
                <Text color='#ADA7AD' textAlign='center' mt='8px'>JS</Text>
            </GridItem>
            <GridItem w='100%' h='10' borderRadius='5px' border='1px #ADA7AD solid'>
                <Text color='#ADA7AD' textAlign='center' mt='8px'>React</Text>
            </GridItem>
            <GridItem w='100%' h='10' borderRadius='5px' border='1px #ADA7AD solid'>
                <Text color='#ADA7AD' textAlign='center' mt='8px'>Node</Text>
            </GridItem>
            <GridItem w='100%' h='10' borderRadius='5px' border='1px #ADA7AD solid'>
                <Text color='#ADA7AD' textAlign='center' mt='8px'>Chakra</Text>
            </GridItem>
            </Grid>
        </Container>
    );
}

export default Skills;