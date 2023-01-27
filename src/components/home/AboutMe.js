import React from 'react';
import {
    Container,
    Text,
    Heading
  } from '@chakra-ui/react';

function AboutMe() {
    return(
        <Container mb='100px' textAlign='center'>
            <Heading color='#ff5277' borderBottom='2px #ff5277 solid' m='0px auto 20px auto' width='220px'>About me</Heading>
            <Text color='#ADA7AD' fontSize='lg' mb='15px'>
            When it came time for me to apply to a high school, I had no idea what I wanted to study and which
            school would suit me best. It ended up with me applying for a few different educations and schools 
            without having any idea how it would end. I started the high school I had chosen randomly as my first 
            choice. What I was going to educate my selfe for the next three years was "Technology - Info and Media".
            </Text>

            <Text color='#ADA7AD' fontSize='lg' mb='15px'>
            Once I started school, I felt so dissatisfied because I was going read a lot of subjects that I was not 
            interested in, for example maths, physics, chemistry, etc. Until I started taking programming and web 
            development courses. That's when I opened my eyes to coding. I noticed pretty quickly that I was more 
            interested in the visuals and the styling, i.e. the front end part.
            </Text>

            <Text color='#ADA7AD' fontSize='lg' mb='15px'>
            After high school, I chose to study further directly after graduation, and thus chose to study a 
            "Frontend / App development" course. It has been a tough but very educational path.
            </Text>

            <Text color='#ADA7AD' fontSize='lg'>
            Some of my other interests / hobbies include working out at the gym, fixing my own acrylic nails, 
            baking and cooking.
            </Text>
        </Container>
    );
}

export default AboutMe;