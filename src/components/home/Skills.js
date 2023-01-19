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
        <Container>
            <Heading textAlign='center' color='black' borderBottom='2px black solid' m='0px auto 20px auto' width='220px'>Skills</Heading>
            <Grid templateColumns='repeat(4, 1fr)' gap={6}>
            <GridItem w='100%' h='10' bg='white' borderRadius="5px" border='1px #C9BCB0 solid'>
                <Text color='#C9BCB0' textAlign='center' mt='8px'>HTML</Text>
            </GridItem>
            <GridItem w='100%' h='10' bg='blackAlpha.300' borderRadius="5px" border='1px black solid'>
                <Text color='black' textAlign='center' mt='8px'>CSS</Text>
            </GridItem>
            <GridItem w='100%' h='10' bg='blackAlpha.300' borderRadius="5px" border='1px black solid'>
                <Text color='black' textAlign='center' mt='8px'>JS</Text>
            </GridItem>
            <GridItem w='100%' h='10' bg='blackAlpha.300' borderRadius="5px" border='1px black solid'>
                <Text color='black' textAlign='center' mt='8px'>React</Text>
            </GridItem>
            <GridItem w='100%' h='10' bg='blackAlpha.300' borderRadius="5px" border='1px black solid'>
                <Text color='black' textAlign='center' mt='8px'>Node</Text>
            </GridItem>
            <GridItem w='100%' h='10' bg='blackAlpha.300' borderRadius="5px" border='1px black solid'>
                <Text color='black' textAlign='center' mt='8px'>Chakra</Text>
            </GridItem>
            </Grid>
        </Container>
    );
}

export default Skills;