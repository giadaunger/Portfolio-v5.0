import React from 'react';
import {
    Container,
    Text,
    Heading
  } from '@chakra-ui/react';

function AboutMe() {
    return(
        <Container mb='100px'>
            <Heading textAlign='center' color='#ff5277' borderBottom='2px #ff5277 solid' m='0px auto 20px auto' width='220px'>About me</Heading>
            <Text color='#ADA7AD' fontSize='lg'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
        </Container>
    );
}

export default AboutMe;