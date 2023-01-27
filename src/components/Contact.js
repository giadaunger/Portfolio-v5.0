import React, {useState} from 'react';
import emailjs from 'emailjs-com'
import {
    FormControl,
    FormLabel,
    Textarea,
    Input,
    Container,
    Heading,
    Text,
    Button
  } from '@chakra-ui/react'

function Contact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);

    const submit = () => {
        if (name && email && message) {
            const serviceId = 'service_dnb2wv4';
            const templateId = 'template_okf6vwu';
            const userId = 'XToFv5sg1a2bOqZoQ';
            const templateParams = {
                name,
                email,
                message
            };

            emailjs.send(serviceId, templateId, templateParams, userId)
                .then(response => console.log(response))
                .then(error => console.log(error));

            setName('');
            setEmail('');
            setMessage('');
            setEmailSent(true);
        } else {
            alert('Please fill in all fields.');
        }
    }

    return(
        <Container>
            <Heading textAlign='center' color='#ff5277' borderBottom='2px #ff5277 solid' m='0px auto 20px auto' width='220px'>Contact me!</Heading>
            <Text color='#ADA7AD' mb='70px' fontSize='lg' textAlign='center'>If you don't have any questions or a message, feel free to leave some feedback / constructive criticism on my portfolio:)</Text>

            <FormControl mb='50px'>
                <FormLabel mt='20px' color='#ADA7AD'>Full name:</FormLabel>
                <Input borderColor='#ADA7AD' color='#ADA7AD' type='text' value={name} onChange={e => setName(e.target.value)} />

                <FormLabel mt='20px' color='#ADA7AD'>Email:</FormLabel>
                <Input borderColor='#ADA7AD' color='#ADA7AD' type='email' value={email} onChange={e => setEmail(e.target.value)} />

                <FormLabel mt='20px' color='#ADA7AD'>Message: </FormLabel>
                <Textarea borderColor='#ADA7AD' color='#ADA7AD'/>

                <Button _hover={{color: '#ff5277'}} color='#ADA7AD' colorScheme='#ADA7AD' variant='outline' display='flex' m='30px auto 20px auto' onClick={submit}>Send message</Button>
                </FormControl>
        </Container>
    );
}

export default Contact;