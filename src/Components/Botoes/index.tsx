import { Botao, Icon, Arrow, Container } from './style';
import { FaFacebookF, FaGithub, FaInstagram, FaWhatsapp} from 'react-icons/fa';
import React from 'react';

const arrow: string = require("../../assets/arrow.svg").default;

function Button () {
    return (
        <div>
        <Container>
            <h2>teste</h2>
        <Botao href="https://www.facebook.com/gabrieldiassantiago09/"> 
        <Icon />
        <FaFacebookF/>Facebook<Arrow src={arrow}/>
        </Botao>
        <Botao href="https://www.instagram.com/_dias17y/">
        <Icon />
        <FaInstagram/>Instagram<Arrow src={arrow}/>
        </Botao>
        <Botao href="https://whatsapp.com">
        <Icon />
        <FaWhatsapp />WhatsApp <Arrow src={arrow} />
        </Botao>
        <Botao href="https://github.com/gabrieldiassantiago">
        <Icon />
        <FaGithub/>Github <Arrow src={arrow} />    
        </Botao>
        </Container>
        </div>
    )
}
export {Button}