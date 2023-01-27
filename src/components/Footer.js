import Logo from './IMG/logo.png'
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import {
    Container,
    Image,
    Text,
    Box,
    IconButton
  } from '@chakra-ui/react'

function Footer() {

    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

     return(
         <Container width='100%' height='50%'>
             <Image alt='logo' src={Logo} boxSize='100px' objectFit='cover'/>

             <Box float='right'>
                 <IconButton m='5px' color='#ADA7AD' colorScheme='#ADA7AD' variant='outline' _hover={{color: '#ff5277'}} aria-label='LinkedIn' icon={<FaGithub />} onClick={() => openInNewTab('https://github.com/giadaunger?tab=repositories')} />
                 <IconButton m='5px' color='#ADA7AD' colorScheme='#ADA7AD' variant='outline' _hover={{color: '#ff5277'}} aria-label='LinkedIn' icon={<FaLinkedin />} onClick={() => openInNewTab('https://www.linkedin.com/in/giadaunger/')} />
                 <IconButton m='5px' color='#ADA7AD' colorScheme='#ADA7AD' variant='outline' _hover={{color: '#ff5277'}} aria-label='LinkedIn' icon={<FaFacebook />} onClick={() => openInNewTab('https://www.facebook.com/profile.php?id=100009439735253')} />
             </Box>

             <Text color='#ADA7AD' textAlign='left' mt='18px' fontSize='0.6em'>© 2023 Giada Unger</Text>
         </Container>
     );
}

export default Footer;