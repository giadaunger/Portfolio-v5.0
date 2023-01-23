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
        <NavLink to="/" style={({ isActive }) => ({ color: isActive ? '#ff5277' : '#ADA7AD' })}>Home</NavLink>
        <Text p='10px' color='#ADA7AD'>|</Text>
        <NavLink to="/projects" style={({ isActive }) => ({ color: isActive ? '#ff5277' : '#ADA7AD' })}>Projects</NavLink>
        <Text p='10px' color='#ADA7AD'>|</Text>
        <NavLink to="/contact" style={({ isActive }) => ({ color: isActive ? '#ff5277' : '#ADA7AD' })}>Contact</NavLink>
      </HStack>
    </Container>
  );
}

export default Nav;