import React from 'react';
import { NavLink } from 'react-router-dom'; 
import { 
  Image,
  Container,
  HStack,
  Text
} from '@chakra-ui/react';
import Logo from './IMG/logo.png'

function Nav() {
  return (
    <Container mb='30px'>
      <NavLink to="/" >
        <Image alt='logo' src={Logo} boxSize='100px' objectFit='cover' m='0px auto 0px auto'/>
      </NavLink>
          
      <HStack justifyContent='center' fontSize='1.3em'>
        <NavLink to="/" >
          <Text color='black' p='10px' _hover={{color: "#baa898"}}>Home</Text>
        </NavLink>
        <NavLink to="/projects">
          <Text color='black' p='10px' _hover={{color: "#baa898"}}>Projects</Text>
        </NavLink>
        <NavLink to="/contact">
          <Text color='black' p='10px' _hover={{color: "#baa898"}} >Contact</Text>
        </NavLink>
      </HStack>
    </Container>
  );
}

export default Nav;